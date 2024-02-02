package com.sail.back.report.model.dto.request.analysis;

import com.fasterxml.jackson.annotation.JsonProperty;

import com.sail.back.report.model.dto.request.analysis.faceRectangle.FaceRectangleDto;
import com.sail.back.report.model.dto.request.analysis.landmark.LandmarkDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FaceLandMarkApiResult {
    @JsonProperty("landmark")
    LandmarkDto landmarkDto;
    @JsonProperty("face_rectangle")
    FaceRectangleDto faceRectangleDto;
}
