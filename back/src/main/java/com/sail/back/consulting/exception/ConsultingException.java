package com.sail.back.consulting.exception;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class ConsultingException extends RuntimeException {
    private final ConsultingErrorCode consultingErrorCode;

    public ConsultingException(ConsultingErrorCode consultingErrorCode) {
        super(consultingErrorCode.getMessage());
        this.consultingErrorCode = consultingErrorCode;
    }
}
