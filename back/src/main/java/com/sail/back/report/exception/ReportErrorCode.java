package com.sail.back.report.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ReportErrorCode {
    NOT_EXISTS("보고서가 생성되지 않았습니다.", HttpStatus.BAD_REQUEST),
    NOT_READY_SURVEY("1차 유형테스트가 완료되지 않았습니다.", HttpStatus.BAD_REQUEST),
    NOT_READY_ANALYSIS("2차 AI 분석이 완료되지 않았습니다.", HttpStatus.BAD_REQUEST),
    ANALYSIS_ERROR("얼굴 분석 오류", HttpStatus.INTERNAL_SERVER_ERROR);

    private final String message;
    private final HttpStatus httpStatus;
}
