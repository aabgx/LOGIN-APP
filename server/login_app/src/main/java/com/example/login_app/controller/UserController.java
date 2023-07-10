package com.example.login_app.controller;

import com.example.login_app.dto.UserDTO;
import com.example.login_app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping
    public List<UserDTO> getAllUsers(){
        return service.getAllUser();
    }

    @DeleteMapping("/{email}")
    public void deleteUserByEmail(@PathVariable String email){
        service.deleteUserByEmail(email);
    }

    @PutMapping("/{email}")
    public UserDTO updateUser(@RequestBody UserDTO userDTO, @PathVariable String email){
        return service.updateUser(userDTO,email);
    }

    @PostMapping
    public UserDTO saveUser(@RequestBody UserDTO userDTO){
        return service.saveUser(userDTO);
    }
}
