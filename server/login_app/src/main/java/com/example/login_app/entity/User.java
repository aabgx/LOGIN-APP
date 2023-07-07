package com.example.login_app.entity;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name="users", schema="login_app_schema")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,unique = true)
    private Integer id;

    @Column(name="first_name",nullable = false,unique = false)
    private String firstName;

    @Column(name="last_name",nullable = false,unique = false)
    private String lastName;

    @Column(nullable = false,unique = true)
    private String email;

    @Column(nullable = false,unique = false)
    private String pass;

    @Column(nullable = false,unique = false)
    private LocalDate birthday;

    @Column(name="user_role",nullable = false,unique = false)
    @Enumerated(EnumType.STRING)
    private UserRole userRole;

    @ElementCollection
    @Column(nullable = false,unique = false)
    private List<String> adresses;

    @ElementCollection
    @Column(name="phone_numbers",nullable = false,unique = false)
    private List<String> phoneNumbers;

    @ElementCollection
    @Column(nullable = true,unique = false)
    private List<String> technologies;

    public User() {}

    public User(String firstName, String lastName, String email, String pass, LocalDate birthday, UserRole userRole, List<String> adresses, List<String> phoneNumbers, List<String> technologies) {
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

    @Override
    public String toString() {
        return "User{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

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
}
