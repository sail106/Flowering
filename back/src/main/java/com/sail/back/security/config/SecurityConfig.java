package com.sail.back.security.config;

import com.sail.back.security.filter.CoustomCorsFilter;
import com.sail.back.security.filter.JwtFilter;
import com.sail.back.security.handler.AuthFailureHandler;
import com.sail.back.security.handler.ExceptionHandlerFilter;
import com.sail.back.security.handler.OAuthSuccessHandler;
import com.sail.back.security.model.service.CustomOAuth2Service;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Collections;

@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig{

    private static final String[] ALLOWED_URIS = {"/v1/users/regist","/v1/auth/**","/v1/email/**","/v1/contents/**","/verifyIamport/**","/oauth2/**","/login/**"};
    private final JwtFilter jwtFilter;
    private final CustomOAuth2Service customOAuth2Service;
    private final OAuthSuccessHandler oAuth2SuccessHandler;
    private final AuthFailureHandler authFailureHandler;
    private final ExceptionHandlerFilter exceptionHandlerFilter;
    private final CoustomCorsFilter corsFilter;
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // 기존 cors 설정 제거 또는 주석 처리
                //.cors(corsConfigurer -> corsConfigurer.configurationSource(corsConfigurationSource()))
                .csrf(AbstractHttpConfigurer::disable)
                .formLogin(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(ALLOWED_URIS).permitAll() // 특정 경로 인증 미요구
                        .anyRequest().authenticated() // 나머지 경로는 인증 요구
                )
                .exceptionHandling(exceptionHandling ->
                        exceptionHandling
                                .authenticationEntryPoint(authFailureHandler)
                )

                .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class) // CorsFilter를 맨 처음에 추가
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class) // JwtFilter 추가
                .addFilterBefore(exceptionHandlerFilter, JwtFilter.class) // ExceptionHandlerFilter 추가

                .oauth2Login(customizer ->
                        customizer
                                .failureHandler(authFailureHandler)
                                .successHandler(oAuth2SuccessHandler)
                                .userInfoEndpoint(userInfoEndpoint ->
                                        userInfoEndpoint.userService(customOAuth2Service))
                );

        return http.build();
    }

}