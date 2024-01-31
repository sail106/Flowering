package com.sail.back.report.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.report.model.entity.enums.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class AnalysisResponse {

    private AnalysisFaceType analysisFaceType;
    private String analysisFaceContent;
    private AnalysisEyebrowType analysisEyebrowType;
    private String analysisEyebrowContent;
    private AnalysisEyeType analysisEyeType;
    private String analysisEyeContent;
    private AnalysisNoseType analysisNoseType;
    private String analysisNoseContent;
    private AnalysisLipsType analysisLipsType;
    private String analysisLipsContent;
    private String analysisResultPores;
    private String analysisResultWrinkles;
    private String analysisResultAcne;
    private String analysisResultDarkCircles;
    private String analysisResultPhotoUrl;
}
