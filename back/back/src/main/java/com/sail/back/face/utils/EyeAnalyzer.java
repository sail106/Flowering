package com.sail.back.face.utils;

import com.sail.back.face.model.dto.response.CoordinateDto;
import com.sail.back.face.model.dto.response.FaceApiResponseDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEye.LeftEyeDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEyeEyelid.LeftEyeEyelidDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEye.RightEyeDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEyeEyelid.RightEyeEyelidDto;
import com.sail.back.face.model.entity.enums.EyelidDirection;
import com.sail.back.face.model.entity.enums.EyelidSize;
import com.sail.back.face.model.entity.enums.EyelidWidth;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

@Slf4j
public class EyeAnalyzer {
    static final Calculator calculator = new Calculator();
    public EyelidDirection eyeShapeAnalyzer(ArrayList<CoordinateDto> leftEyelid, ArrayList<CoordinateDto> rightEyelid){

        //왼쪽, 오른쪽 눈꼬리 위아래
        double leftEyeSlope = calculator.slope(leftEyelid.get(31), leftEyelid.get(0));
        double rightEyeSlope = -calculator.slope(rightEyelid.get(31), rightEyelid.get(0));

        //기울기 중간 값
        double middleValue = (leftEyeSlope+rightEyeSlope)/2;

        if(middleValue > 0.05){
            return EyelidDirection.UPSIDEEYELID;
        }else if(middleValue < -0.05){
            return EyelidDirection.DOWNSIDEEYELID;
        }else{
            return EyelidDirection.MIDDLEEYELID;
        }

    }

    public EyelidWidth eyeWidthAnalyzer(ArrayList<CoordinateDto> leftEyelid, ArrayList<CoordinateDto> rightEyelid, ArrayList<CoordinateDto> faceContourLeft, ArrayList<CoordinateDto> faceContourRight){
        //눈매 길이
        double betweenEyeWidth = calculator.distance(rightEyelid.get(31), leftEyelid.get(31));
        double leftEyeWidth = calculator.distance(leftEyelid.get(31), leftEyelid.get(0));
        double rightEyeWidth = calculator.distance(rightEyelid.get(0), rightEyelid.get(31));

        //얼굴 끝과 눈매 끝 사이의 거리
        int leftClosestNum = calculator.closestY(faceContourLeft, leftEyelid.get(0).getY());
        double leftBlank = calculator.distance(leftEyelid.get(0), faceContourLeft.get(leftClosestNum));
        int rightClosestNum = calculator.closestY(faceContourRight, rightEyelid.get(0).getY());
        double rightBlank = calculator.distance(rightEyelid.get(0), faceContourRight.get(rightClosestNum));

        //길이 중간 값
        double middleValue = (leftEyeWidth+rightEyeWidth)/2l;

        //눈끝, 미간 중 가장 긴 길이 색출
        double standardValue = Math.max(betweenEyeWidth, Math.max(leftBlank, rightBlank));

        double compareValue = middleValue/standardValue;

        if(compareValue > 1.1){
            return EyelidWidth.LONGEYELID;
        }else if(middleValue < 0.9){
            return EyelidWidth.SHORTEYELID;
        }else{
            return EyelidWidth.PERFECTEYELID;
        }
    }


    public EyelidSize eyeSizeAnalyzer(ArrayList<CoordinateDto> leftEyelid, ArrayList<CoordinateDto> rightEyelid, ArrayList<CoordinateDto> leftEyebrow, ArrayList<CoordinateDto> rightEyebrow){
        //눈 크기
        int leftHeighEyeNum = calculator.findMaximalY(leftEyelid);
        int leftLowEyeNum = calculator.findMinimalY(leftEyelid);
        int rightHeighEyeNum = calculator.findMaximalY(rightEyelid);
        int rightLowEyeNum = calculator.findMinimalY(rightEyelid);

        double leftEyeHeight = leftEyelid.get(leftHeighEyeNum).getY()-leftEyelid.get(leftLowEyeNum).getY();
        double rightEyeHeight = rightEyelid.get(rightHeighEyeNum).getY() - rightEyelid.get(rightLowEyeNum).getY();

        ArrayList<CoordinateDto> lowerLeftEyebrow = calculator.seperateLower(leftEyebrow);
        ArrayList<CoordinateDto> lowerRightEyebrow = calculator.seperateLower(rightEyebrow);

        //눈과 눈썹 사이 거리
        int closestLeftEyeBrowNum = calculator.closestX(lowerLeftEyebrow, leftEyelid.get(leftLowEyeNum).getX());
        int closestRightEyeBrowNum = calculator.closestX(lowerRightEyebrow, rightEyelid.get(rightLowEyeNum).getX());

        double leftEyeUpperBlank = leftEyelid.get(leftLowEyeNum).getY()-lowerLeftEyebrow.get(closestLeftEyeBrowNum).getY() ;;
        double rightEyeUpperBlank = rightEyelid.get(rightLowEyeNum).getY()-lowerRightEyebrow.get(closestRightEyeBrowNum).getY();

        //눈크기 중간값
        double middleValue = (leftEyeHeight+rightEyeHeight)/2;

        //눈썹 사이 거리 중간값
        double middleBrowValue = (leftEyeUpperBlank+rightEyeUpperBlank)/2;

        //비교값
        double compareValue = middleValue/middleBrowValue;

        log.info(String.valueOf(compareValue));

        if (compareValue > 1.2){
            return EyelidSize.BIGEYES;
        }else if(compareValue < 0.8){
            return EyelidSize.SMALLEYES;
        }else{
            return EyelidSize.PERFECTEYES;
        }

    }


}
