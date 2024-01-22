package com.sail.back.admin.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum AdminErrorCode {
    NOT_EXISTS_ADMIN("존재하지 않는 관리자 입니다.", HttpStatus.BAD_REQUEST),
    NOT_ADMIN("관리자가 아닙니다.", HttpStatus.BAD_REQUEST),
    ALREADY_IN("이미 가입된 관리자 입니다.", HttpStatus.BAD_REQUEST);

    private final String message;
    private final HttpStatus httpStatus;
}
