package com.sail.back.report.model.entity.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum EyelidDirection  {
    DOWNSID_EEYE_LID("눈꼬리가 내려감"),
    MIDDLE_EYE_LID("보통"),
    UPSIDE_EYE_LID("눈꼬리가 올라감");
    String content;
}
