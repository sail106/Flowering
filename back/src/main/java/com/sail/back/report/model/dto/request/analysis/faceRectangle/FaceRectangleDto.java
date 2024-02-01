package com.sail.back.report.model.dto.request.analysis.faceRectangle;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FaceRectangleDto {
    @JsonProperty("width")
    int width;
    @JsonProperty("top")
    int top;
    @JsonProperty("height")
    int height;
    @JsonProperty("left")
    int left;

}
