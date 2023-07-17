package com.example.login_app.service;

import com.example.login_app.dto.TechnologyDTO;
import com.example.login_app.dto.UserDTO;
import com.example.login_app.entity.Technology;
import com.example.login_app.entity.User;
import com.example.login_app.exception.EmailAlreadyInUseException;
import com.example.login_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        if(userRepository.findByEmail(userDTO.getEmail()).isPresent()){
            throw new EmailAlreadyInUseException(userDTO.getEmail());
        }
//        userRepository.findByEmail(userDTO.getEmail()).orElseThrow(() -> new EmailAlreadyInUseException(userDTO.getEmail()));
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
    public void deleteUserByEmail(String email) {
        User user = userRepository.findByEmail(email).get();

        userRepository.deleteById(user.getId());
    }

    private User convertUserDTOToUser(UserDTO userDTO){
        User user = new User();
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPass(userDTO.getPass());
        user.setBirthday(userDTO.getBirthday());
        user.setUserRole(userDTO.getUserRole());
        user.setAdresses(userDTO.getAdresses());
        user.setPhoneNumbers(userDTO.getPhoneNumbers());

        Set<Technology> techs = userDTO.getTechnologies()
                .stream()
                .map(this::convertTechnologyDTOToTechnology)
                .collect(Collectors.toSet());

        user.setTechnologies(techs);

        return user;
    }

    private UserDTO convertUserToUserDTO(User user){
        UserDTO userDTO = new UserDTO();
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPass(user.getPass());
        userDTO.setBirthday(user.getBirthday());
        userDTO.setUserRole(user.getUserRole());
        userDTO.setAdresses(user.getAdresses());
        userDTO.setPhoneNumbers(user.getPhoneNumbers());

        Set<TechnologyDTO> techsDTO = user.getTechnologies()
                .stream()
                .map(this::convertTechnologyToTechnologyDTO)
                .collect(Collectors.toSet());

        userDTO.setTechnologies(techsDTO);

        return userDTO;
    }

    private TechnologyDTO convertTechnologyToTechnologyDTO(Technology tech){
        TechnologyDTO techDTO=new TechnologyDTO();
        techDTO.setId(tech.getId());
        techDTO.setName(tech.getName());

        return techDTO;
    }
    private Technology convertTechnologyDTOToTechnology(TechnologyDTO techDTO){
        Technology tech=new Technology();
        tech.setId(techDTO.getId());
        tech.setName(techDTO.getName());

        return tech;
    }

}
