package com.sail.back.community.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum CommunityErrorCode {
    DEFAULT("F", HttpStatus.BAD_REQUEST),
    COMMUNITY_NOT_FOUND("존재하지 않는 커뮤니티 입니다.", HttpStatus.NOT_FOUND);

    private final String message;
    private final HttpStatus httpStatus;
}
