package com.sail.back.report.model.entity.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AnalysisEyeType {
    DEFAULT("이 타입의 내용을 적어주세요");
    String content;
}
