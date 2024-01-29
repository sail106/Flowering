package com.sail.back.face.model.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sail.back.face.model.dto.response.face.faceRectangle.FaceRectangleDto;
import com.sail.back.face.model.dto.response.face.landmark.LandmarkDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FaceApiResponseDto {
    @JsonProperty("landmark")
    LandmarkDto landmarkDto;
    @JsonProperty("face_rectangle")
    FaceRectangleDto faceRectangleDto;
}
