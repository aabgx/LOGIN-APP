package com.example.login_app.service;

import com.example.login_app.dto.UserDTO;
import com.example.login_app.entity.User;
import com.example.login_app.entity.UserRole;
import com.example.login_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    private User convertUserDTOToUser(UserDTO userDTO){
        String firstName = userDTO.getFirstName();
        String lastName=userDTO.getLastName();
        String email = userDTO.getEmail();
        String pass = userDTO.getPass();
        LocalDate birthday=userDTO.getBirthday();
        UserRole userRole=userDTO.getUserRole();
        List<String> adresses = userDTO.getAdresses();
        List<String> phoneNumbers = userDTO.getPhoneNumbers();
        List<String> technologies = userDTO.getTechnologies();

        return new User(firstName,lastName,email,pass,birthday,userRole,adresses,phoneNumbers,technologies);
    }

    private UserDTO convertUserToUserDTO(User user){
        String firstName = user.getFirstName();
        String lastName=user.getLastName();
        String email = user.getEmail();
        String pass = user.getPass();
        LocalDate birthday=user.getBirthday();
        UserRole userRole=user.getUserRole();
        List<String> adresses = user.getAdresses();
        List<String> phoneNumbers = user.getPhoneNumbers();
        List<String> technologies = user.getTechnologies();

        return new UserDTO(firstName,lastName,email,pass,birthday,userRole,adresses,phoneNumbers,technologies);
    }

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        User user = convertUserDTOToUser(userDTO);
        User result = userRepository.save(user);
        return convertUserToUserDTO(result);
    }

    @Override
    public List<UserDTO> getAllUser() {
        return userRepository.findAll()
                .stream()
                .map(this::convertUserToUserDTO)
                .toList();
    }

    @Override
    public UserDTO updateUser(UserDTO userDTO, String email) {
        User user = convertUserDTOToUser(userDTO);
        User userDB=null;
        try{
        userDB = userRepository.findByEmail(email).orElseThrow(NoSuchElementException::new);
        }catch(NoSuchElementException ex){
            //no operation
        }

        userDB.setAdresses(user.getAdresses());
        userDB.setUserRole(user.getUserRole());
        userDB.setBirthday(user.getBirthday());
        userDB.setPass(user.getPass());
        userDB.setFirstName(user.getFirstName());
        userDB.setLastName(user.getLastName());
        userDB.setTechnologies(user.getTechnologies());
        userDB.setPhoneNumbers(user.getPhoneNumbers());

        return convertUserToUserDTO(userRepository.save(userDB));
    }

    @Override
    public void deleteUserById(Integer id) {
        userRepository.deleteById(id);
    }
}
