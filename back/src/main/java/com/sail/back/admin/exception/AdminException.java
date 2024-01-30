package com.sail.back.admin.exception;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class AdminException extends RuntimeException {
    private final AdminErrorCode adminErrorCode;


    public AdminException (AdminErrorCode adminErrorCode) {
        super(adminErrorCode.getMessage());
        this.adminErrorCode= adminErrorCode;
    }
}
