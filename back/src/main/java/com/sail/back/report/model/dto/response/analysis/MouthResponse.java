package com.sail.back.report.model.dto.response.analysis;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.report.model.entity.enums.LipRatio;
import com.sail.back.report.model.entity.enums.MouthSize;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class MouthResponse {
    private MouthSize mouthSize;
    private LipRatio lipRatio;
    private int x1;
    private int y1;
    private int x2;
    private int y2;
}
