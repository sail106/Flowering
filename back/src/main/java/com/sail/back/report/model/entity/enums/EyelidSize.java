package com.sail.back.report.model.entity.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum EyelidSize {
    BIG_EYES("큰눈"),
    PERFECT_EYES("보통눈"),
    SMALL_EYES("작은 눈");

    String content;
}