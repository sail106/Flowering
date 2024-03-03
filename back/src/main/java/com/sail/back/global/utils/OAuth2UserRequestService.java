//package com.sail.back.global.utils;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.oauth2.client.endpoint.OAuth2AuthorizationCodeGrantRequest;
//import org.springframework.security.oauth2.client.endpoint.OAuth2AccessTokenResponseClient;
//import org.springframework.security.oauth2.client.registration.ClientRegistration;
//import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
//import org.springframework.security.oauth2.core.OAuth2AccessToken;
//import org.springframework.stereotype.Service;
//
//@Service
//public class OAuth2UserRequestService {
//
//    @Autowired
//    private ClientRegistrationRepository clientRegistrationRepository;
//
//    @Autowired
//    private OAuth2AccessTokenResponseClient<OAuth2AuthorizationCodeGrantRequest> accessTokenResponseClient;
//
//    public OAuth2AccessToken getAccessToken(String code) {
//        // 네이버 로그인에 대한 ClientRegistration 정보를 가져옵니다.
//        ClientRegistration clientRegistration = clientRegistrationRepository.findByRegistrationId("naver");
//
//        // 액세스 토큰 요청을 위한 파라미터 설정
//        OAuth2AuthorizationCodeGrantRequest tokenRequest = new OAuth2AuthorizationCodeGrantRequest(
//                clientRegistration,
//                code,
//                clientRegistration.getRedirectUri(),
//                null
//        );
//
//        // 액세스 토큰 요청을 수행하고 액세스 토큰을 반환
//        OAuth2AccessToken accessToken = accessTokenResponseClient.getTokenResponse(tokenRequest).getAccessToken();
//
//        return accessToken;
//    }
//
//}
