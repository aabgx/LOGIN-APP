package com.example.login_app.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class AuthTokenFilter extends OncePerRequestFilter {
    private JwtUtils jwtUtils;

    public AuthTokenFilter(JwtUtils jwtUtils){
        this.jwtUtils=jwtUtils;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String jwt=extractJwt(request);
        if(jwt != null && jwtUtils.validateJWT(jwt)){
            UserDetails userDetails = jwtUtils.extractDetails(jwt);
            UsernamePasswordAuthenticationToken authentification = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
            authentification.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authentification);
        }
        filterChain.doFilter(request,response);
    }

    private String extractJwt(HttpServletRequest request){
        String authHeader = request.getHeader("Authorization ");
        if(StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")){
            String[] jwtSplit= authHeader.split(" ");
            return jwtSplit[1];
        }
        return null;
    }
}
