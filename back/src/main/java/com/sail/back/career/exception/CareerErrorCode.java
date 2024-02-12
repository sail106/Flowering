package com.sail.back.career.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum CareerErrorCode {
    NOT_EXISTS_Career("존재하지 않는 커리어 입니다.", HttpStatus.BAD_REQUEST),
    ALREADY_IN("이미 기입된  커리어입니다.", HttpStatus.BAD_REQUEST);

    private final String message;
    private final HttpStatus httpStatus;
}
