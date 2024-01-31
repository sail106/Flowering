package com.sail.back.report.model.dto.response.analysis;


import com.sail.back.report.model.entity.enums.AlarSize;
import com.sail.back.report.model.entity.enums.NoseSize;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class NoseResponse {
    private NoseSize noseSize;
    private AlarSize alarSize;
    private int x1;
    private int y1;
    private int x2;
    private int y2;
}
