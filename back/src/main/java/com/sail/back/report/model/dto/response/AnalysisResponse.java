package com.sail.back.report.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.report.model.dto.response.analysis.*;
import com.sail.back.report.model.entity.enums.*;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class AnalysisResponse {

    //얼굴형 분석 결과 저장
    private FaceShapeResponse faceShapeData;

    //눈 분석 결과 저장
    private EyeResponse eyeData;

    //코 분석 결과 저장
    private NoseResponse noseData;

    //입 분석 정보
    private MouthResponse mouthData;
    
    //피부 분석 정보
    private SkinResponse skinData;
    
    private String analysisResultPhotoUrl;
}
