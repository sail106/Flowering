package com.sail.back.face.controller;


import com.sail.back.face.model.dto.response.FaceApiResponseDto;
import com.sail.back.face.model.dto.response.face.landmark.face.FaceDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEye.LeftEyeDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEyeEyelid.LeftEyeEyelidDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEyebrow.LeftEyebrowDto;
import com.sail.back.face.model.dto.response.face.landmark.mouth.MouthDto;
import com.sail.back.face.model.dto.response.face.landmark.nose.NoseDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEye.RightEyeDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEyeEyelid.RightEyeEyelidDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEyebrow.RightEyebrowDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;

import static com.sail.back.face.utils.FaceCoordinate.sendPostRequest;


@RestController
@RequestMapping("/v1/face")
@RequiredArgsConstructor
@Slf4j
public class FaceController {

    @GetMapping("/love")
    public static void start() throws IOException{
        String imageUrl = "https://cdn.thebk.co.kr/news/photo/201411/114415_18295_4418.jpg";
        FaceApiResponseDto faceApiResponseDto = sendPostRequest(imageUrl);

        FaceDto face = faceApiResponseDto.getLandmarkDto().getFaceDto();
        NoseDto nose = faceApiResponseDto.getLandmarkDto().getNoseDto();
        MouthDto mouth = faceApiResponseDto.getLandmarkDto().getMouthDto();
        LeftEyeDto leftEye = faceApiResponseDto.getLandmarkDto().getLeftEyeDto();
        LeftEyebrowDto leftEyebrow = faceApiResponseDto.getLandmarkDto().getLeftEyebrowDto();
        LeftEyeEyelidDto leftEyelid = faceApiResponseDto.getLandmarkDto().getLeftEyeEyelidDto();
        RightEyeDto rightEye = faceApiResponseDto.getLandmarkDto().getRightEyeDto();
        RightEyebrowDto rightEyebrow = faceApiResponseDto.getLandmarkDto().getRightEyebrowDto();
        RightEyeEyelidDto rightEyelid = faceApiResponseDto.getLandmarkDto().getRightEyeEyelidDto();

    }



}

