package com.sail.back.security.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.security.utils.HttpRequestEndpointChecker;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;

import java.io.IOException;

@Configuration
@RequiredArgsConstructor
public class NotFound403Handler extends Http403ForbiddenEntryPoint {
    private final HttpRequestEndpointChecker httpRequestEndpointChecker;

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException {
        if (!httpRequestEndpointChecker.isEndpointExist(request)) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND,"resoucs not found");
        } else {
            super.commence(request,response,exception);
        }
    }

}