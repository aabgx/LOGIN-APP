package com.example.login_app.dto;

import com.example.login_app.entity.UserRole;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;

import java.time.LocalDate;
import java.util.List;

public class UserDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String pass;
    private LocalDate birthday;
    private UserRole userRole;
    private List<String> adresses;
    private List<String> phoneNumbers;
    private List<String> technologies;

    public UserDTO(String firstName, String lastName, String email, String pass, LocalDate birthday, UserRole userRole, List<String> adresses, List<String> phoneNumbers, List<String> technologies) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.pass = pass;
        this.birthday = birthday;
        this.userRole = userRole;
        this.adresses = adresses;
        this.phoneNumbers = phoneNumbers;
        this.technologies = technologies;
    }

    public UserDTO(){}

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public UserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }

    public List<String> getAdresses() {
        return adresses;
    }

    public void setAdresses(List<String> adresses) {
        this.adresses = adresses;
    }

    public List<String> getPhoneNumbers() {
        return phoneNumbers;
    }

    public void setPhoneNumbers(List<String> phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
    }

    public List<String> getTechnologies() {
        return technologies;
    }

    public void setTechnologies(List<String> technologies) {
        this.technologies = technologies;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
