package com.sail.back.global.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "spring.analysis")
public class AnalysisConfig {
    private String key;
    private String secret;
}
