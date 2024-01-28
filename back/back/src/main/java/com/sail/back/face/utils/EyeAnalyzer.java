package com.sail.back.face.utils;

import com.sail.back.face.model.dto.response.CoordinateDto;
import com.sail.back.face.model.dto.response.FaceApiResponseDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEye.LeftEyeDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEyeEyelid.LeftEyeEyelidDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEye.RightEyeDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEyeEyelid.RightEyeEyelidDto;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

@Slf4j
public class EyeAnalyzer {
    static final Calculator calculator = new Calculator();
    public String EyeShapeAnalyze(ArrayList<CoordinateDto> leftEyelid, ArrayList<CoordinateDto> rightEyelid, ArrayList<CoordinateDto> leftEye, ArrayList<CoordinateDto> rightEye, ArrayList<CoordinateDto> faceContourLeft, ArrayList<CoordinateDto> faceContourRight, ArrayList<CoordinateDto> leftEyebrow, ArrayList<CoordinateDto> rightEyebrow){

        //왼쪽, 오른쪽 눈꼬리 위아래
        double leftEyeSlope = -calculator.slope(leftEyelid.get(31), leftEyelid.get(0));
        double rightEyeSlope = calculator.slope(rightEyelid.get(31), rightEyelid.get(0));

        //눈매 길이
        double betweenEyeWidth = calculator.distance(rightEyelid.get(31), leftEyelid.get(31));
        double leftEyeWidth = calculator.distance(leftEyelid.get(31), leftEyelid.get(0));
        double rightEyeWidth = calculator.distance(rightEyelid.get(0), rightEyelid.get(31));

        //얼굴 끝과 눈매 끝 사이의 거리
        int leftClosestNum = calculator.closestY(faceContourLeft, leftEyelid.get(0).getY());
        double leftBlank = calculator.distance(leftEyelid.get(0), faceContourLeft.get(leftClosestNum));
        int rightClosestNum = calculator.closestY(faceContourRight, rightEyelid.get(0).getY());
        double rightBlank = calculator.distance(rightEyelid.get(0), faceContourRight.get(rightClosestNum));

        //눈 크기
        int leftEyeHighest = calculator.findMaximalY(leftEyelid);
        int leftEyeLowest = calculator.findMaximalY(leftEyelid);
        double leftEyeHeight = leftEyelid.get(leftEyeHighest).getY()-leftEyelid.get(leftEyeLowest).getY();
        int rightEyeHighest = calculator.findMaximalY(rightEyelid);
        int rightEyeLowest = calculator.findMaximalY(rightEyelid);
        double rightEyeHeight = rightEyelid.get(rightEyeHighest).getY() - rightEyelid.get(rightEyeLowest).getY();

        //눈과 눈썹 사이 거리
        int leftBrowClosestNum = calculator.closestX(leftEyebrow, leftEyelid.get(leftEyeHighest).getX());
        double leftEyeUpperBlank = leftEyelid.get(leftEyeHighest).getY()-leftEyebrow.get(leftBrowClosestNum).getY();
        int rightBrowClosestNum = calculator.closestX(rightEyebrow, rightEyelid.get(rightEyeHighest).getX());
        double rightEyeUpperBlank = rightEyelid.get(rightEyeHighest).getY() - rightEyebrow.get(rightBrowClosestNum).getY();


        return  "";
    }


}
