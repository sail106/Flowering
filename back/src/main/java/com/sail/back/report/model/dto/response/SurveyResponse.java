package com.sail.back.report.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.report.model.entity.enums.SurveyType;
import com.sail.back.user.model.dto.response.UserResponse;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class SurveyResponse {
    private String surveyType;
    private String skinType;
    private String content;
    private String strength;
    private String weakness;
    private String solution;
}
