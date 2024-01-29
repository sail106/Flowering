package com.sail.back.report.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.report.model.entity.enums.*;
import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class ReportResponse {

    private Long reportId;
    private Long consultingId;
    private SurveyType surveyType;


    private AnalysisFaceType analysis_face_type;
    private String analysis_face_content;
    private AnalysisEyebrowType analysis_eyebrow_type;
    private String analysis_eyebrow_content;
    private AnalysisEyeType analysis_eye_type;
    private String analysis_eye_content;
    private AnalysisNoseType analysis_nose_type;
    private String analysis_nose_content;
    private AnalysisLipsType analysis_lips_type;
    private String analysis_lips_content;
    private String analysis_result_pores;
    private String analysis_result_wrinkles;
    private String analysis_result_acne;
    private String analysis_result_dark_circles;
    private String analysis_result_photo_url;

    private String skincare_skinstate;
    private String skincare_solution;
    private String skincare_morning;
    private String skincare_night;
    private String makeup_facetype;
    private String makeup_facialexpression;
    private String makeup_solution;
    private String makeup_shading;
    private String makeup_blusher;
    private String makeup_highlighting;
    private String makeup_lipmakeup;
    private String makeup_eyemakeup;
    private String makeup_skinmakeup;
    private String hairstyle_haircolor;
    private String hairstyle_hairstyle;
    private String hairstyle_solution;

}
