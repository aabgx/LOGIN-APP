package com.example.login_app.exception;

public class EmailNotFound extends RuntimeException{
    private final String email;

    public EmailNotFound(String email) {
        super(email);
        this.email = email;
    }
}
