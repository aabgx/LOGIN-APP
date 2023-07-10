package com.example.login_app.dto;

import com.example.login_app.entity.UserRole;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

public class UserDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String pass;
    private LocalDate birthday;
    private UserRole userRole;
    private String adresses;
    private String phoneNumbers;
    private Set<TechnologyDTO> technologies;

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

    public String getAdresses() {
        return adresses;
    }

    public void setAdresses(String adresses) {
        this.adresses = adresses;
    }

    public String getPhoneNumbers() {
        return phoneNumbers;
    }

    public void setPhoneNumbers(String phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
    }

    public Set<TechnologyDTO> getTechnologies() {
        return technologies;
    }

    public void setTechnologies(Set<TechnologyDTO> technologies) {
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
