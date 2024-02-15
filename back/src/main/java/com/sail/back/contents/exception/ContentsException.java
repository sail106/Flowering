package com.sail.back.contents.exception;


import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class ContentsException extends RuntimeException{
    private final ContentsErrorCode contentsErrorCode;
    public ContentsException(ContentsErrorCode contentsErrorCode) {
        this.contentsErrorCode = contentsErrorCode;
    }
}
