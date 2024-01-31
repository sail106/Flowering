package com.sail.back.report.model.entity.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum NoseSize {
    BIG_NOSE("큰 코"),
    MIDDLE_NOSE("중간 코"),
    SMALL_NOSE("작은 코");
    String content;
}
