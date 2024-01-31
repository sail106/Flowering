package com.sail.back.face.controller;


import com.sail.back.face.model.dto.faceclass.FaceResult;
import com.sail.back.face.model.dto.faceclass.includeclass.EyeResult;
import com.sail.back.face.model.dto.faceclass.includeclass.FaceShapeResult;
import com.sail.back.face.model.dto.faceclass.includeclass.MouthResult;
import com.sail.back.face.model.dto.faceclass.includeclass.NoseResult;
import com.sail.back.face.model.dto.response.CoordinateDto;
import com.sail.back.face.model.dto.response.FaceApiResponseDto;
import com.sail.back.face.model.dto.response.face.landmark.face.FaceDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEye.LeftEyeDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEyeEyelid.LeftEyeEyelidDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEyebrow.LeftEyebrowDto;
import com.sail.back.face.model.dto.response.face.landmark.mouth.MouthDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEye.RightEyeDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEyeEyelid.RightEyeEyelidDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEyebrow.RightEyebrowDto;
import com.sail.back.face.model.entity.enums.*;
import com.sail.back.face.utils.*;
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

    static final Calculator calculator = new Calculator();
    static final MakeListFromDto makeListFromDto = new MakeListFromDto();
    static final EyeAnalyzer eyeAnalyzer = new EyeAnalyzer();
    static final NoseAnalyzer noseAnalyzer = new NoseAnalyzer();
    static final MouthAnalyzer mouthAnalyzer = new MouthAnalyzer();
    static final FaceShapeAnalyzer faceShapeAnalyzer = new FaceShapeAnalyzer();

    @GetMapping("/love")
    public static void start() throws IOException{
        String imageUrl = "https://img.allurekorea.com/allure/2018/02/style_5a92dac2bdc8b.jpg";
        FaceApiResponseDto faceApiResponseDto = sendPostRequest(imageUrl);

        FaceDto face = faceApiResponseDto.getLandmarkDto().getFaceDto();
        com.sail.back.face.model.dto.response.face.landmark.nose.NoseDto noseDto = faceApiResponseDto.getLandmarkDto().getNoseDto();
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

        CoordinateDto leftNostril = noseDto.getLeft_nostril();
        CoordinateDto rightNostril = noseDto.getRight_nostril();

        ArrayList<CoordinateDto> faceHairlineList = makeListFromDto.faceHairlineList(face);
        ArrayList<CoordinateDto> faceContourRightList = makeListFromDto.faceContourRightList(face);
        ArrayList<CoordinateDto> faceContourLeftList = makeListFromDto.faceContourLeftList(face);
        ArrayList<CoordinateDto> leftEyelidList = makeListFromDto.leftEyeLidList(leftEyelid);
        ArrayList<CoordinateDto> rightEyelidList = makeListFromDto.rightEyeLidList(rightEyelid);
        ArrayList<CoordinateDto> leftEyeList = makeListFromDto.leftEyeList(leftEye);
        ArrayList<CoordinateDto> rightEyeList = makeListFromDto.rightEyeList(rightEye);
        ArrayList<CoordinateDto> leftEyebrowList = makeListFromDto.leftEyebrowList(leftEyebrow);
        ArrayList<CoordinateDto> rightEyebrowList = makeListFromDto.rightEyebrowList(rightEyebrow);
        ArrayList<CoordinateDto> noseMidlineList = makeListFromDto.noseMidlineList(noseDto);
        ArrayList<CoordinateDto> noseLeftList = makeListFromDto.noseLeftList(noseDto);
        ArrayList<CoordinateDto> noseRightList = makeListFromDto.noseRightList(noseDto);
        ArrayList<CoordinateDto> upperLipList = makeListFromDto.upperLipList(mouth);
        ArrayList<CoordinateDto> lowerLipList = makeListFromDto.lowerLipList(mouth);

        //눈꼬리 올라감, 내려감
        EyelidDirection eyeDirection= eyeAnalyzer.eyeShapeAnalyzer(leftEyelidList, rightEyelidList);
        //눈매 김 짧음
        EyelidWidth eyeWidth = eyeAnalyzer.eyeWidthAnalyzer(leftEyelidList, rightEyelidList, faceContourLeftList, faceContourRightList);
        //눈 크기
        EyelidSize eyeSize = eyeAnalyzer.eyeSizeAnalyzer(leftEyelidList, rightEyelidList, leftEyebrowList, rightEyebrowList);
        //코 크기
        NoseSize noseSize = noseAnalyzer.noseSizeAnalyzer(noseLeftList, noseRightList, leftEyelidList.get(31), rightEyelidList.get(31));
        //콧볼 크기
        AlarSize alarSize = noseAnalyzer.alarSizeAnalyzer(noseLeftList, noseRightList);

        //입 크기
        MouthSize mouthSize = mouthAnalyzer.mouthSizeAnalyzer(upperLipList, lowerLipList, leftEyePupilCenter, rightEyePupilCenter, leftEyePupilRadius, rightEyePupilRadius);
        //입 비율
        LipRatio lipRatio = mouthAnalyzer.mouthRatioAnalyzer(upperLipList, lowerLipList);
        //얼굴 분류
        FaceShape faceShape = faceShapeAnalyzer.shapeTypeAnalyzer(faceHairlineList, faceContourLeftList, faceContourRightList);

        //눈 좌표
        int eyeLeftTopX = leftEyelidList.get(calculator.findMinimalX(leftEyelidList)).getX();
        int eyeLeftTopY = leftEyelidList.get(calculator.findMinimalX(leftEyelidList)).getY();
        int eyeRightBottomX = rightEyelidList.get(calculator.findMinimalX(rightEyelidList)).getX();
        int eyeRightBottomY = rightEyelidList.get(calculator.findMaximalY(rightEyelidList)).getY();

        //코 좌표
        int noseLeftTopX = noseLeftList.get(calculator.findMinimalX(noseLeftList)).getX();
        int noseLeftTopY = noseMidlineList.get(calculator.findMinimalY(noseMidlineList)).getY();
        int noseRightBottomX = noseRightList.get(calculator.findMaximalX(noseRightList)).getX();
        int noseRightBottomY = noseMidlineList.get(calculator.findMaximalY(noseMidlineList)).getY();

        //입 좌표
        int mouthLeftTopX = upperLipList.get(calculator.findMinimalX(upperLipList)).getX();
        int mouthLeftTopY = upperLipList.get(calculator.findMinimalY(upperLipList)).getY();
        int mouthRightBottomX = lowerLipList.get(calculator.findMaximalX(lowerLipList)).getX();
        int mouthRightBottomY = lowerLipList.get(calculator.findMaximalY(lowerLipList)).getY();

        //얼굴 좌표
        int faceLeftTopX = faceHairlineList.get(calculator.findMinimalX(faceHairlineList)).getX();
        int faceLeftTopY = faceHairlineList.get(calculator.findMinimalY(faceHairlineList)).getY();
        int faceRightBottomX = faceHairlineList.get(calculator.findMaximalX(faceHairlineList)).getX();
        int faceRightBottomY = faceContourRightList.get(calculator.findMaximalY(faceContourRightList)).getY();

        //객체에 삽입
        EyeResult eyeResult = new EyeResult(eyeDirection, eyeWidth, eyeSize, eyeLeftTopX, eyeLeftTopY, eyeRightBottomX, eyeRightBottomY);
        NoseResult noseResult = new NoseResult(noseSize, alarSize, noseLeftTopX, noseLeftTopY, noseRightBottomX, noseRightBottomY);
        MouthResult mouthResult = new MouthResult(mouthSize, lipRatio, mouthLeftTopX, mouthLeftTopY, mouthRightBottomX, mouthRightBottomY);
        FaceShapeResult faceShapeResult = new FaceShapeResult(faceShape, faceLeftTopX, faceLeftTopY, faceRightBottomX, faceRightBottomY);

        //최종 객체에 삽입
        FaceResult faceResult = new FaceResult(eyeResult, faceShapeResult, mouthResult, noseResult);

        log.info(eyeDirection.toString());
        log.info(eyeWidth.toString());
        log.info(eyeSize.toString());
        log.info(noseSize.toString());
        log.info(mouthSize.toString());
        log.info(lipRatio.toString());
        log.info(faceShape.toString());
    }



}

