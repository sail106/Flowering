package com.sail.back.report.model.entity.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AlarSize {
    BIG_ALAR("큰 콧볼"),
    PERFECT_ALAR("완법한 콧볼"),
    SMALL_ALAR("작은 콧볼");
    String content;
}
