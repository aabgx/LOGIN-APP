package com.example.login_app.service;

import com.example.login_app.dto.UserDTO;
import com.example.login_app.entity.User;

import java.util.List;

public interface UserService {
    UserDTO saveUser(UserDTO userDTO);

    List<UserDTO> getAllUser();

    UserDTO updateUser(UserDTO userDTO, String email);

    void deleteUserByEmail(String email);
}
