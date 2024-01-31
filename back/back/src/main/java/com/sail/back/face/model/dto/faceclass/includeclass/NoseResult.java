package com.sail.back.face.model.dto.faceclass.includeclass;

import com.sail.back.face.model.entity.enums.AlarSize;
import com.sail.back.face.model.entity.enums.NoseSize;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class NoseResult {
    NoseSize noseSize;
    AlarSize alarSize;
    int x1;
    int y1;
    int x2;
    int y2;
}
