package com.sail.back.face.utils;

import com.sail.back.face.model.dto.response.CoordinateDto;
import com.sail.back.face.model.entity.enums.LipRatio;
import com.sail.back.face.model.entity.enums.MouthSize;

import java.util.ArrayList;

public class MouthAnalyzer {

    static final Calculator calculator = new Calculator();
    public LipRatio mouthRatioAnalyzer(ArrayList<CoordinateDto> upperLip, ArrayList<CoordinateDto> lowerLip){
        //윗입술 두께
        int cupidLip = calculator.findMinimalY(upperLip);
        double upperLipSize = upperLip.get(47).getY()-upperLip.get(cupidLip).getY();

        //아랫입술 두께
        int lowLip = calculator.findMaximalY(lowerLip);
        double lowerLipSize = lowerLip.get(lowLip).getY() - lowerLip.get(47).getY();

        double compareValue = lowerLipSize/upperLipSize;

        if (compareValue > 1.6){
            return LipRatio.UPPERLIBSMALL;
        }else if(compareValue < 1.1){
            return LipRatio.UPPERLIBGIG;
        }else {
            return LipRatio.PERFECT;
        }
    }

    public MouthSize mouthSizeAnalyzer(ArrayList<CoordinateDto> upperLip, ArrayList<CoordinateDto> lowerLip, CoordinateDto leftPupil, CoordinateDto rightPupil, int leftRadius, int rightRadius){
        int leftUpperLip = upperLip.get(calculator.findMinimalX(upperLip)).getX();
        int rightUpperLip = upperLip.get(calculator.findMaximalX(upperLip)).getX();

        int leftLowerLip = lowerLip.get(calculator.findMinimalX(lowerLip)).getX();
        int rightLowerLip = lowerLip.get(calculator.findMaximalX(lowerLip)).getX();

        int leftX = Math.min(leftLowerLip, leftUpperLip);
        int rightX = Math.max(rightLowerLip, rightUpperLip);

        int mouthWidth = rightX - leftX;

        int pupilStandard = rightPupil.getX()-leftPupil.getX();

        int smallStandard = pupilStandard-leftRadius-rightRadius;

        if(mouthWidth <= smallStandard){
            return MouthSize.SMALLMOUTH;
        }else if (mouthWidth >= pupilStandard){
            return MouthSize.BIGMOUTH;
        }else {
            return MouthSize.MIDDLEMOUTH;
        }

    }


}
