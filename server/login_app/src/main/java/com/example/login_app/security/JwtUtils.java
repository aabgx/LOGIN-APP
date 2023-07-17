package com.example.login_app.security;

import com.example.login_app.dto.UserDetailsDTO;
import com.example.login_app.entity.User;
import com.example.login_app.entity.UserRole;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Signature;
import java.util.Collections;
import java.util.Date;

@Component
public class JwtUtils {
    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);
    @Value("${app.jwtSecret}")
    private String jwtSecret;

    @Value("{app.jwtExpirationMs}")
    private int jwtExpiration;


    public String generateJWT(User user){
        Date issuedAt = new Date();
        return Jwts.builder()
                .setSubject(user.getEmail())
                .claim("authorities",user.getUserRole())
                .setIssuedAt(issuedAt)
                .setExpiration(new Date(issuedAt.getTime()+jwtExpiration))
                .signWith(SignatureAlgorithm.HS512,jwtSecret)
                .compact();
    }

    public boolean validateJWT(String authToken){
        try{
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        }catch(SignatureException ex) {
            logger.error("Invalid signature: {}", ex.getMessage());
        }catch(MalformedJwtException ex){
            logger.error("Malformed token: {}", ex.getMessage());
        }catch(UnsupportedJwtException ex){
            logger.error("Unsupported token: {}", ex.getMessage());
        }catch(IllegalArgumentException ex){
            logger.error("JWT claims empty: {}", ex.getMessage());
        }catch(ExpiredJwtException ex){
            logger.error("Expired token: {}",ex.getMessage());
        }
        return false;
    }

    public UserDetails extractDetails(String token){
        Claims body = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
        String email = body.getSubject();
        String authority = body.get("authorities", String.class);
        return new UserDetailsDTO(email, Collections.singleton(UserRole.valueOf(authority)));
    }
}
