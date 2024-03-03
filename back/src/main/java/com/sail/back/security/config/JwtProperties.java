package com.sail.back.security.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "spring.jwt")
public class JwtProperties { //키값과 제한 시간
    private String access;  //키값
    private String refresh;
    private Long accesstime;
    private Long refreshtime;
}
