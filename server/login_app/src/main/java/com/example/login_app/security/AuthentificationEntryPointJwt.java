package com.example.login_app.security;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class AuthentificationEntryPointJwt implements AuthenticationEntryPoint {
    private Logger logger = LoggerFactory.getLogger(AuthentificationEntryPointJwt.class);

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
        logger.error("unauthorized error: {}",authException.getMessage());
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED,"error: unauthorized");
    }
}
