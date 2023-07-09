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

    @DeleteMapping
    public void deleteUserById(@RequestParam Integer id){
        service.deleteUserById(id);
    }

    @PutMapping
    public UserDTO updateUser(@RequestBody UserDTO userDTO, @RequestParam String email){
        return service.updateUser(userDTO,email);
    }

    @PostMapping
    public UserDTO saveUser(@RequestBody UserDTO userDTO){
        return service.saveUser(userDTO);
    }
}
