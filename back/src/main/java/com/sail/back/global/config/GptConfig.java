package com.sail.back.global.config;

import com.theokanning.openai.service.OpenAiService;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Duration;

@Data
@Configuration
@Slf4j
@ConfigurationProperties(prefix = "chatgpt")
public class GptConfig {
    private String key;

    @Bean
    public OpenAiService openAiService(){
        log.info("token : {}을 활용한 OpenAiService를 생성한다.",key);
        return new OpenAiService(key, Duration.ofSeconds(300));
    }
}
