package com.sail.back.face.utils;

import com.sail.back.face.model.dto.response.CoordinateDto;
import com.sail.back.face.model.dto.response.FaceApiResponseDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEye.LeftEyeDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEyeEyelid.LeftEyeEyelidDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEye.RightEyeDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEyeEyelid.RightEyeEyelidDto;

import java.util.ArrayList;
import java.util.List;

public class EyeAnalyzer {

    public String EyeShapeAnalyze(LeftEyeEyelidDto leftEyeEyelid, RightEyeEyelidDto rightEyeEyelid, LeftEyeDto leftEye, RightEyeDto rightEye){
        ArrayList<Float> leftEyeIncline = new ArrayList<>();
        ArrayList<Float> rightEyeIncline = new ArrayList<>();

        for (int i = 0; i < leftEyeEyelid. - 1; i++) {
            CoordinateDto currentPoint = coordinates[i];
            CoordinateDto nextPoint = coordinates[i + 1];

            double slope = CoordinateDto.calculateSlopeBetweenPoints(currentPoint, nextPoint);
            slopes.add(slope);
        }

    }


}
