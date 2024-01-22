package com.sail.back.review.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ReviewErrorCode {
    NOT_EXISTS_USER("존재하지 않는 리뷰입니다.", HttpStatus.BAD_REQUEST),
    NOT_MY_REVIEW("내가 작성하지 않은 리뷰입니다.", HttpStatus.BAD_REQUEST),
    ALREADY_IN("이미 작성된 리뷰입니다.", HttpStatus.BAD_REQUEST),
    IS_CONSULTANT("전문가는 리뷰를 작성할수 없습니다.", HttpStatus.BAD_REQUEST),
    NO_REVIEW ("내 리뷰 목록이 없습니다.", HttpStatus.BAD_REQUEST);

    private final String message;
    private final HttpStatus httpStatus;
}
