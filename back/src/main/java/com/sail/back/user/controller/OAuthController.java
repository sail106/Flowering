package com.sail.back.user.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sail.back.consulting.model.dto.response.ConsultingIsActiveResponse;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.consulting.model.service.ConsultingService;
import com.sail.back.global.config.NaverConfig;
import com.sail.back.global.token.NaverOAuthToken;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.global.utils.NaverOpenApiUtils;
import com.sail.back.user.model.dto.request.FindRequest;
import com.sail.back.user.model.dto.request.UserRegistRequest;
import com.sail.back.user.model.dto.request.UserUpdateRequest;
import com.sail.back.user.model.dto.response.MyConsultinglistResponse;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.AuthProvider;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/v1/oauth")
@RequiredArgsConstructor
@Slf4j
public class OAuthController {

    private final UserService userService;
    private final ConsultingService consultingService;
    private final NaverOpenApiUtils naverOpenApiUtils;
    private final NaverConfig naverConfig;


    /**
     * 프론트에 Redirect URI를 제공하기 위한 메소드
     * 프론트에서 네이버 인증 센터로 요청을 주기위한 URI를 제공하며, 이를통해 인증코드를 받아 자체 서비스 callback API 호출시 전달
     *
     * @return redirect URI
     * @throws UnsupportedEncodingException
     */
    @GetMapping("/")
    public ResponseEntity<?> naverConnect() throws UnsupportedEncodingException {

        String url = naverOpenApiUtils.createNaverURL();
        return ResponseEntity.ok(url); // 프론트 브라우저로 보내는 주소

    }

    //
    @GetMapping("/naver/login/callback")
    public ResponseEntity<?> oauth2LoginCallback(String code, String state) throws JsonProcessingException {
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
//        params.add("grant_type", "authorization_code");
//        params.add("client_id", naverConfig.getClientId());
//        params.add("client_secret", naverConfig.getClientSecret());
//        params.add("code", code);
//        params.add("state", state);
        // Parameter로 전달할 속성들 추가

        HttpEntity<MultiValueMap<String, String>> naverTokenRequest = makeTokenRequest(params);
        // Http 메시지 생성
        log.info("innnn");

        RestTemplate rt = new RestTemplate();
        String TOKEN_REQUEST_URL = "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=" + naverConfig.getClientId() + "&client_secret=" + naverConfig.getClientSecret() + "&code=" + code;
//        String TOKEN_REQUEST_URL = "";
        log.info("innnn"+TOKEN_REQUEST_URL);
        ResponseEntity<String> tokenResponse = rt.exchange( //여기서 post 시 error 발생.
                TOKEN_REQUEST_URL,
                HttpMethod.POST,
                naverTokenRequest,
                String.class
        );
        log.info("tokenResponse"+tokenResponse.toString());

        // TOKEN_REQUEST_URL로 Http 요청 전송

        ObjectMapper objectMapper = new ObjectMapper();
        NaverOAuthToken naverToken = objectMapper.readValue(tokenResponse.getBody(), NaverOAuthToken.class);
        // ObjectMapper를 통해 NaverOAuthToken 객체로 매핑
        log.info("innnn");



        // 토큰을 사용하여 사용자 정보 요청
        String USER_INFO_URL = "https://openapi.naver.com/v1/nid/me";
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + naverToken.getAccess_token());
        HttpEntity<?> userInfoRequest = new HttpEntity<>(headers);
        ResponseEntity<String> userInfoResponse = restTemplate.exchange(
                USER_INFO_URL,
                HttpMethod.GET,
                userInfoRequest,
                String.class
        );

        // 사용자 정보를 가져온 후 처리
        String userInfo = userInfoResponse.getBody();
        // 사용자 정보를 원하는 형태로 파싱 또는 처리

        // 여기서 사용자 정보를 처리한 후, 필요한 로직을 수행합니다.

        return ResponseEntity.ok("OAuth2 login successful. User info: " + userInfo);
//        return ResponseEntity.ok(naverToken);
    }

    private HttpEntity<MultiValueMap<String, String>> makeTokenRequest(MultiValueMap<String, String> params) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        HttpEntity<MultiValueMap<String, String>> naverTokenRequest = new HttpEntity<>(params, headers);
        return naverTokenRequest;

    }
}
