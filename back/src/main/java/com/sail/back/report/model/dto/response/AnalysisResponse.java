package com.sail.back.report.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.report.model.entity.enums.*;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class AnalysisResponse {

    //얼굴형 분석 결과 저장
    private FaceShape faceShape;
    private int faceX1;
    private int faceY1;
    private int faceX2;
    private int faceY2;

    //눈 분석 결과 저장
    private EyelidDirection eyelidDirection;
    private EyelidWidth eyelidWidth;
    private EyelidSize eyelidSize;
    private int eyeX1;
    private int eyeY1;
    private int eyeX2;
    private int eyeY2;

    //코 분석 결과 저장
    private NoseSize noseSize;
    private AlarSize alarSize;
    private int noseX1;
    private int noseY1;
    private int noseX2;
    private int noseY2;


    private MouthSize mouthSize;
    private LipRatio lipRatio;
    private int lipX1;
    private int lipY1;
    private int lipX2;
    private int lipY2;

    private String analysisResultPores;
    private String analysisResultWrinkles;
    private String analysisResultAcne;
    private String analysisResultDarkCircles;
    private String analysisResultPhotoUrl;
}
