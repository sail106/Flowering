package com.sail.back.consultant.exception;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class ConsultantException extends RuntimeException {
    private final ConsultantErrorCode consultantErrorCode;


    public ConsultantException(ConsultantErrorCode consultantErrorCode) {
        super(consultantErrorCode.getMessage());
        this.consultantErrorCode = consultantErrorCode;
    }
}
