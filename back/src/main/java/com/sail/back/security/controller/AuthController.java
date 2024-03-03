package com.sail.back.security.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sail.back.global.config.NaverConfig;
import com.sail.back.global.token.NaverOAuthToken;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.global.utils.NaverOpenApiUtils;
import com.sail.back.security.model.dto.request.LoginRequest;
import com.sail.back.security.model.dto.request.RefreshRequest;
import com.sail.back.security.model.dto.response.GeneratedToken;
import com.sail.back.security.model.service.AuthService;
import com.sail.back.security.model.service.CustomOAuth2Service;
import com.sail.back.security.model.service.TokenService;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.AuthProvider;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.endpoint.OAuth2AccessTokenResponse;
import org.springframework.security.oauth2.core.endpoint.OAuth2AuthorizationRequest;
import org.springframework.security.oauth2.core.endpoint.OAuth2AuthorizationResponseType;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/v1/auth")
public class AuthController {

    private final AuthService authService;
    private final NaverOpenApiUtils naverOpenApiUtils;
    private final CustomOAuth2Service customOAuth2Service;
    private final NaverConfig naverConfig;

    @PostMapping("/login")
    public ResponseEntity<MessageUtils> login(@Valid @RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok().body(MessageUtils.success(authService.login(loginRequest.getEmail(), loginRequest.getPassword())));
    }

    @PostMapping("/logout")
    public ResponseEntity<MessageUtils> logout(@AuthenticationPrincipal User user) {
        authService.logout(user);
        return ResponseEntity.ok().body(MessageUtils.success());
    }

    @PostMapping("/refresh")
    public ResponseEntity<MessageUtils> refresh(@RequestBody RefreshRequest refreshRequest) {
        return ResponseEntity.ok().body(MessageUtils.success(authService.refresh(refreshRequest.getRefreshToken())));
    }

//    @PostMapping("/login/{provider}")
//    public ResponseEntity<MessageUtils> Oauth2Login(
//            @PathVariable AuthProvider provider
//            ){
//        return ResponseEntity.ok().body(MessageUtils.success(authService.));
//    }



}
