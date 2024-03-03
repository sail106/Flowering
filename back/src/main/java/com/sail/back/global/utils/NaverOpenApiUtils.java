package com.sail.back.global.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sail.back.global.config.NaverConfig;
import com.sail.back.global.token.NaverOAuthToken;
import com.sail.back.product.model.dto.response.naver.SearchResult;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.net.URLEncoder;
import java.security.SecureRandom;


@Service
@Slf4j
@RequiredArgsConstructor
public class NaverOpenApiUtils {

    private final NaverConfig naverConfig;
    public Mono<SearchResult> sendSuchNaverShop(String suchText, Long start, Long display, String sort) {

        WebClient webClient = WebClient.builder()
                .baseUrl("https://openapi.naver.com")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, "application/json")
                .defaultHeader("X-Naver-Client-Id", naverConfig.getClientId())
                .defaultHeader("X-Naver-Client-Secret", naverConfig.getClientSecret())
                .build();

        Mono<SearchResult> response = webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/v1/search/shop.json")
                        .queryParam("query", suchText)
                        .queryParam("start", start)
                        .queryParam("display", display)
                        .queryParam("sort", sort)
                        .build())
                .retrieve()
                .bodyToMono(SearchResult.class);

        return response;
    }

    public String createNaverURL() throws UnsupportedEncodingException {
        StringBuffer url = new StringBuffer();

        // 카카오 API 명세에 맞춰서 작성
        String redirectURI = URLEncoder.encode("http://localhost:8080/v1/oauth/naver/login/callback", "UTF-8"); // 변경된 부분
        SecureRandom random = new SecureRandom();
        String state = new BigInteger(130, random).toString();

        url.append("https://nid.naver.com/oauth2.0/authorize?response_type=code");
        url.append("&client_id=" + naverConfig.getClientId());
        url.append("&state=" + state);
        url.append("&redirect_uri=" + redirectURI);

        return url.toString();
    }



}
