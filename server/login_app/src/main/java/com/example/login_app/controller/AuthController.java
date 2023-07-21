package com.example.login_app.controller;

import com.example.login_app.dto.LoginDTO;
import com.example.login_app.dto.UserDTO;
import com.example.login_app.entity.User;
import com.example.login_app.exception.EmailNotFound;
import com.example.login_app.repository.UserRepository;
import com.example.login_app.security.JwtUtils;
import com.example.login_app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;


@RestController
public class AuthController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public String loginUser(@RequestBody LoginDTO loginDTO){
        //password not set = null
        //token dpes not taken into consideration
        // only login with peter =)))

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken( "peterrrrrr.peter@gmail.com","aaaaAAAA1111"));

        Optional<User> user = userRepository.findByEmail( "peterrrrrr.peter@gmail.com");
        if(user.isPresent()){
            return jwtUtils.generateJWT(user.get());
        }else{
            throw new EmailNotFound(loginDTO.getEmail());
        }
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody UserDTO userDTO){
        userService.saveUser(userDTO);
        Optional<User> user = userRepository.findByEmail(userDTO.getEmail());
        if(user.isPresent()){
            return jwtUtils.generateJWT(user.get());
        }else{
            throw new EmailNotFound(userDTO.getEmail());
        }
    }
}
