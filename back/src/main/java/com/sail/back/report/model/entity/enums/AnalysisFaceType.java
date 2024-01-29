package com.sail.back.report.model.entity.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AnalysisFaceType {
    얼굴형("타입별 내용을 적어주세요");

    String content;
}