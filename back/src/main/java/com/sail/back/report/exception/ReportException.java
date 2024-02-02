package com.sail.back.report.exception;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class ReportException extends RuntimeException{
    private final ReportErrorCode errorCode;
    public ReportException(ReportErrorCode e) {
        super(e.getMessage());
        this.errorCode = e;
    }

    public ReportException(ReportErrorCode errorCode, Throwable cause) {
        super(cause);
        this.errorCode = errorCode;
    }
}
