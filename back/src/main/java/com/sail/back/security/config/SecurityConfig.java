package com.sail.back.security.config;

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

    private static final String[] ALLOWED_URIS = {"/v1/users/regist","/v1/auth/**","/v1/email/**","/v1/contents/**","/verifyIamport/**"};
    private final JwtFilter jwtFilter;
    private final CustomOAuth2Service customOAuth2Service;
    private final OAuthSuccessHandler oAuth2SuccessHandler;
    private final AuthFailureHandler authFailureHandler;
    private final ExceptionHandlerFilter exceptionHandlerFilter;
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .cors(corsConfigurer -> corsConfigurer.configurationSource(corsConfigurationSource()))
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
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)// JwtFilter 추가
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


    public CorsConfigurationSource corsConfigurationSource() {
        return request -> {
            CorsConfiguration config = new CorsConfiguration();
            config.setAllowedHeaders(Collections.singletonList("*"));
            config.setAllowedMethods(Collections.singletonList("*"));
            // 모든 도메인 허용
            config.setAllowedOrigins(Collections.singletonList("*")); // 모든 Origin 허용
            // config.setAllowedOriginPatterns(Collections.singletonList("*")); // 이 방식은 패턴 사용 시 적합
            config.setAllowCredentials(false); // 모든 도메인을 허용할 때는 false로 설정해야 함
            return config;
        };
    }

}