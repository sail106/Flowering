package com.sail.back.community.exception;


import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class CommunityException extends RuntimeException{
    private final CommunityErrorCode errorCode;
    public CommunityException(CommunityErrorCode errorCode) {
        this.errorCode = errorCode;
    }
}
