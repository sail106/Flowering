package com.sail.back.face.model.dto.faceclass.includeclass;

import com.sail.back.face.model.entity.enums.EyelidDirection;
import com.sail.back.face.model.entity.enums.EyelidSize;
import com.sail.back.face.model.entity.enums.EyelidWidth;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EyeResult {
    EyelidDirection eyelidDirection;
    EyelidWidth eyelidWidth;
    EyelidSize eyelidSize;
    int x1;
    int y1;
    int x2;
    int y2;
}
