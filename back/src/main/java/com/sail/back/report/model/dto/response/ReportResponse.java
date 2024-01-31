package com.sail.back.report.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consulting.model.dto.response.ConsultingResponse;
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

    private ConsultingResponse consultingData;

    private SurveyResponse surveyData;

    private AnalysisResponse analysisData;


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
