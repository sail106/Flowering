package com.sail.back.report.model.dto.response.analysis;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.report.model.entity.enums.AlarSize;
import com.sail.back.report.model.entity.enums.NoseSize;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class NoseResponse {
    private NoseSize noseSize;
    private AlarSize alarSize;
    private int x1;
    private int y1;
    private int x2;
    private int y2;
    private String noseContent;
}
