package com.sail.back.career.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class CareerException extends RuntimeException {
    private final CareerErrorCode  careerErrorCode;

//
    public CareerException(CareerErrorCode careerErrorCode) {
        super(careerErrorCode.getMessage());
        this.careerErrorCode = careerErrorCode;
    }
}
