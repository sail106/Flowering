package com.sail.back.community.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum CommunityErrorCode {
    NOT_ALLOWED_RESERVATION("커뮤니티 생성자는 예약 할 수 없습니다.", HttpStatus.BAD_REQUEST),
    ALREADY_IN_RESERVATION("이미 예약된 커뮤니티 입니다.", HttpStatus.BAD_REQUEST),
    NOT_FOUND_RESERVATION("존재하지 않는 예약건 입니다.", HttpStatus.NOT_FOUND),
    COMMUNITY_NOT_FOUND("존재하지 않는 커뮤니티 입니다.", HttpStatus.NOT_FOUND);

    private final String message;
    private final HttpStatus httpStatus;
}
