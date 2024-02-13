package com.sail.back.report.model.dto.response.analysis;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.report.model.entity.enums.EyelidDirection;
import com.sail.back.report.model.entity.enums.EyelidSize;
import com.sail.back.report.model.entity.enums.EyelidWidth;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class EyeResponse {
    private EyelidDirection eyelidDirection;
    private EyelidWidth eyelidWidth;
    private EyelidSize eyelidSize;
    private int x1;
    private int y1;
    private int x2;
    private int y2;
}
