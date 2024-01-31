package com.sail.back.report.model.entity.enums;

import com.sail.back.report.model.dto.response.AnalysisTypeResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum EyelidWidth  {
    LONG_EYE_LID("긴 눈매"),
    PERFECT_EYE_LID("완벽한 눈매 길이"),
    SHORT_EYE_LID("짧은 눈매길이");

    String content;

    public AnalysisTypeResponse toResponse(){
        return AnalysisTypeResponse.builder()
                .type(this.name())
                .type(this.content)
                .build();
    }
}
