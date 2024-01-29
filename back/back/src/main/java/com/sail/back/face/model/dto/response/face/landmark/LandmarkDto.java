package com.sail.back.face.model.dto.response.face.landmark;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sail.back.face.model.dto.response.CoordinateDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEyebrow.LeftEyebrowDto;
import com.sail.back.face.model.dto.response.face.landmark.mouth.MouthDto;
import com.sail.back.face.model.dto.response.face.landmark.nose.NoseDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEye.RightEyeDto;
import com.sail.back.face.model.dto.response.face.landmark.face.FaceDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEye.LeftEyeDto;
import com.sail.back.face.model.dto.response.face.landmark.leftEyeEyelid.LeftEyeEyelidDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEyeEyelid.RightEyeEyelidDto;
import com.sail.back.face.model.dto.response.face.landmark.rightEyebrow.RightEyebrowDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LandmarkDto {
    @JsonProperty("right_eye_eyelid")
    RightEyeEyelidDto rightEyeEyelidDto;
    @JsonProperty("left_eye_eyelid")
    LeftEyeEyelidDto leftEyeEyelidDto;
    @JsonProperty("right_eye")
    RightEyeDto rightEyeDto;
    @JsonProperty("left_eye")
    LeftEyeDto leftEyeDto;
    @JsonProperty("right_eyebrow")
    RightEyebrowDto rightEyebrowDto;
    @JsonProperty("left_eyebrow")
    LeftEyebrowDto leftEyebrowDto;
    @JsonProperty("nose")
    NoseDto noseDto;
    @JsonProperty("mouth")
    MouthDto mouthDto;
    @JsonProperty("face")
    FaceDto faceDto;
}
