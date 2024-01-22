package com.sail.back.review.exception;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class ReviewException extends RuntimeException{
    private final ReviewErrorCode reviewErrorCode;


    public ReviewException(ReviewErrorCode reviewErrorCode) {
        super(reviewErrorCode.getMessage());
        this.reviewErrorCode = reviewErrorCode;
    }
}
