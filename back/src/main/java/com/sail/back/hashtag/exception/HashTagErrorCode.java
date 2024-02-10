package com.sail.back.hashtag.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
@Getter
@AllArgsConstructor
public enum HashTagErrorCode {
    NOT_EXISTS("존재하지 않는 해시태그입니다.", HttpStatus.BAD_REQUEST),
    FULL("해시태그는 2개만 입력 가능합니다.", HttpStatus.BAD_REQUEST),
    NOT_MINE("내 해시태그가 아닙니다.", HttpStatus.BAD_REQUEST),
    ALREADY_IN("이미 작성된 해시태그입니다.", HttpStatus.BAD_REQUEST);

    private final String message;
    private final HttpStatus httpStatus;
}
