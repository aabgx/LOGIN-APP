package com.example.login_app.controller;

import com.example.login_app.dto.LoginDTO;
import com.example.login_app.entity.User;
import com.example.login_app.exception.EmailNotFound;
import com.example.login_app.repository.UserRepository;
import com.example.login_app.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;


@RestController
public class AuthController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public String loginUser(@RequestBody LoginDTO loginDTO){
        Authentication authentification =  authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getEmail(),loginDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentification);

        Optional<User> user = userRepository.findByEmail(loginDTO.getEmail());
        if(user.isPresent()){
            return jwtUtils.generateJWT(user.get());
        }else{
            throw new EmailNotFound(loginDTO.getEmail());
        }
    }
}
