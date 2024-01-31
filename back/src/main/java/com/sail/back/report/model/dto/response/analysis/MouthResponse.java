package com.sail.back.report.model.dto.response.analysis;


import com.sail.back.report.model.entity.enums.LipRatio;
import com.sail.back.report.model.entity.enums.MouthSize;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MouthResponse {
    private MouthSize mouthSize;
    private LipRatio lipRatio;
    private int x1;
    private int y1;
    private int x2;
    private int y2;
}
