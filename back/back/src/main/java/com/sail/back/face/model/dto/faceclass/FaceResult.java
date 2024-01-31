package com.sail.back.face.model.dto.faceclass;

import com.sail.back.face.model.dto.faceclass.includeclass.EyeResult;
import com.sail.back.face.model.dto.faceclass.includeclass.FaceShapeResult;
import com.sail.back.face.model.dto.faceclass.includeclass.MouthResult;
import com.sail.back.face.model.dto.faceclass.includeclass.NoseResult;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FaceResult {
    EyeResult eyeResult;
    FaceShapeResult faceShapeResult;
    MouthResult mouthResult;
    NoseResult noseResult;
}
