package com.sail.back.faq.exception;


import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class FAQException extends RuntimeException{
    private final FAQErrorCode faqErrorCode;
    public FAQException(FAQErrorCode faqErrorCode) {
        this.faqErrorCode = faqErrorCode;
    }
}
