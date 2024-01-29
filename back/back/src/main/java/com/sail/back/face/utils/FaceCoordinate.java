package com.sail.back.face.utils;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sail.back.face.model.dto.response.FaceApiResponseDto;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.io.IOException;


@Slf4j
public class FaceCoordinate {

    //얼굴 좌표 받아오는 메소드
    public static FaceApiResponseDto sendPostRequest(String imageUrl) throws IOException{

        //param설정
        String apiKey = "G_enut2BTuQK76_Nmb3KgtLPt-4mTmie";
        String apiSecret = "S-u7a0CPBNfUi7D_Ckys-MOoeEHeLXNl";

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("api_key", apiKey);
        params.add("api_secret", apiSecret);
        params.add("image_url", imageUrl);
        params.add("return_landmark", "all");


        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders header = new HttpHeaders();
        header.setContentType(MediaType.MULTIPART_FORM_DATA);

        HttpEntity<?> requestEntity = new HttpEntity<>(params, header);


        UriComponents uri = UriComponentsBuilder.fromHttpUrl("https://api-us.faceplusplus.com/facepp/v1/face/thousandlandmark").build();

        ResponseEntity<String> resultMap = restTemplate.exchange(uri.toString(), HttpMethod.POST, requestEntity, String.class);


        ObjectMapper mapper = new ObjectMapper();
        JsonNode responseJsonNode = mapper.readTree(resultMap.getBody());
        JsonNode faceJsonNode = responseJsonNode.get("face");

        FaceApiResponseDto faceApiResponseDto = mapper.treeToValue(faceJsonNode, FaceApiResponseDto.class);

        return faceApiResponseDto;

    }

}
