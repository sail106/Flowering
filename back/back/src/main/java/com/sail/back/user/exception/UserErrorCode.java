package com.sail.back.user.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum UserErrorCode {
    NOT_EXISTS_USER("존재하지 않는 회원입니다.", HttpStatus.BAD_REQUEST),
    ALREADY_IN_EMAIL("이미 가입된 회원입니다.", HttpStatus.BAD_REQUEST),
    NO_CONSULTING_AVAILABLE("내 컨설팅 목록이 없습니다.", HttpStatus.BAD_REQUEST);

    private final String message;
    private final HttpStatus httpStatus;
}
