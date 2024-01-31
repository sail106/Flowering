package com.sail.back.report.model.entity.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum FaceShape {
    LONG("긴 얼굴"),
    ROUND("동그란 얼굴"),
    RECTANGLE("각진 얼굴"),
    TRIANGLE("역삼각형 얼굴");
    String content;
}
