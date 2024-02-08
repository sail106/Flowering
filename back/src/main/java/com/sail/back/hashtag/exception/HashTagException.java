package com.sail.back.hashtag.exception;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class HashTagException extends RuntimeException {
    private final HashTagErrorCode errorCode;

    public HashTagException(HashTagErrorCode e) {
        super(e.getMessage());
        this.errorCode = e;
    }
}
