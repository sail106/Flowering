package com.sail.back.report.model.dto.response.analysis;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class SkinResponse {
    private int analysisResultPores;
    private int analysisResultGlabellaWrinkle;
    private int analysisResultForeheadWrinkle;
    private int analysisResultAcne;
    private int analysisResultDarkCircles;
}
