package com.sail.back.product.exception;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class ProductException extends RuntimeException{
    private final ProductErrorCode errorCode;
    public ProductException(ProductErrorCode e) {
        super(e.getMessage());
        this.errorCode = e;
    }
}
