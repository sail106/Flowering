package com.sail.back.faq.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum FAQErrorCode {
    LIMIT_EXCEEDED("FAQ는 10개 초과일 수 없습니다.", HttpStatus.BAD_REQUEST),
    FAQ_NOT_FOUND("존재하지 않는 FAQ 입니다.", HttpStatus.NOT_FOUND);

    private final String message;
    private final HttpStatus httpStatus;
}
