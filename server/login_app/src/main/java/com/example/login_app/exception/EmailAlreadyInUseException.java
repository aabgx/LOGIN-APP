package com.example.login_app.exception;

public class EmailAlreadyInUseException extends RuntimeException{
    private final String email;

    public EmailAlreadyInUseException(String email) {
        super(email);
        this.email = email;
    }
}
