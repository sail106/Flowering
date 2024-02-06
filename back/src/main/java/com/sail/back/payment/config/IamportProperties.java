package com.sail.back.payment.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "iamport")
public class IamportProperties {
    private String key;
    private String secret;
}
