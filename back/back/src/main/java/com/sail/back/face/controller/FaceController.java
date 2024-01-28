package com.sail.back.face.controller;


import com.sail.back.face.model.dto.response.CoordinateDto;
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
import com.sail.back.face.utils.EyeAnalyzer;
import com.sail.back.face.utils.MakeListFromDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.util.ArrayList;

import static com.sail.back.face.utils.FaceCoordinate.sendPostRequest;


@RestController
@RequestMapping("/v1/face")
@RequiredArgsConstructor
@Slf4j
public class FaceController {

    static final MakeListFromDto makeListFromDto = new MakeListFromDto();
    static final EyeAnalyzer eyeAnalyzer = new EyeAnalyzer();

    @GetMapping("/love")
    public static void start() throws IOException{
        String imageUrl = "https://img.allurekorea.com/allure/2018/02/style_5a92dac2bdc8b.jpg";
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

        CoordinateDto leftEyePupilCenter = leftEye.getLeftEyePupilCenter();
        CoordinateDto rightEyePupilCenter = rightEye.getRightEyePupilCenter();

        int leftEyePupilRadius = leftEye.getLeftEyePupilRadius();
        int rightEyePupilRadius = rightEye.getRightEyePupilRadius();

        CoordinateDto leftNostril = nose.getLeft_nostril();
        CoordinateDto rightNostril = nose.getRight_nostril();

        ArrayList<CoordinateDto> faceHairlineList = makeListFromDto.faceHairlineList(face);
        ArrayList<CoordinateDto> faceContourRightList = makeListFromDto.faceContourRightList(face);
        ArrayList<CoordinateDto> faceContourLeftList = makeListFromDto.faceContourLeftList(face);
        ArrayList<CoordinateDto> leftEyelidList = makeListFromDto.leftEyeLidList(leftEyelid);
        ArrayList<CoordinateDto> rightEyelidList = makeListFromDto.rightEyeLidList(rightEyelid);
        ArrayList<CoordinateDto> leftEyeList = makeListFromDto.leftEyeList(leftEye);
        ArrayList<CoordinateDto> rightEyeList = makeListFromDto.rightEyeList(rightEye);
        ArrayList<CoordinateDto> leftEyebrowList = makeListFromDto.leftEyebrowList(leftEyebrow);
        ArrayList<CoordinateDto> rightEyebrowList = makeListFromDto.rightEyebrowList(rightEyebrow);
        ArrayList<CoordinateDto> noseMidlineList = makeListFromDto.noseMidlineList(nose);
        ArrayList<CoordinateDto> noseLeftList = makeListFromDto.noseLeftList(nose);
        ArrayList<CoordinateDto> noseRightList = makeListFromDto.noseRightList(nose);
        ArrayList<CoordinateDto> upperLipList = makeListFromDto.upperLipList(mouth);
        ArrayList<CoordinateDto> lowerLipList = makeListFromDto.lowerLipList(mouth);

        eyeAnalyzer.EyeShapeAnalyze(leftEyelidList, rightEyelidList, leftEyeList, rightEyeList, faceContourLeftList, faceContourRightList, leftEyebrowList, rightEyebrowList);

    }



}

