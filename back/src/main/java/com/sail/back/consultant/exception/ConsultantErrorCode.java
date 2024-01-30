package com.sail.back.consultant.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ConsultantErrorCode {
    NOT_EXISTS_CONSULTANT("존재하지 않는 전문가 입니다.", HttpStatus.BAD_REQUEST),
    NOT_EXISTS_TIME("해당 시간에 상담이 존재하지 않습니다.", HttpStatus.BAD_REQUEST),
    NOT_CONSULTANT("해당 유저는 전문가가 아닙니다.", HttpStatus.BAD_REQUEST),
    NOT_MYSELF("컨설턴트 본인이 아닙니다.", HttpStatus.BAD_REQUEST),
    ALREADY_IN("이미 가입된 전문가입니다.", HttpStatus.BAD_REQUEST);

    private final String message;
    private final HttpStatus httpStatus;
}
