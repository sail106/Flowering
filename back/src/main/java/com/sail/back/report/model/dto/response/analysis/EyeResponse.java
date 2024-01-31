package com.sail.back.report.model.dto.response.analysis;

import com.sail.back.report.model.entity.enums.EyelidDirection;
import com.sail.back.report.model.entity.enums.EyelidSize;
import com.sail.back.report.model.entity.enums.EyelidWidth;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EyeResponse {
    private EyelidDirection eyelidDirection;
    private EyelidWidth eyelidWidth;
    private EyelidSize eyelidSize;
    private int x1;
    private int y1;
    private int x2;
    private int y2;
}
