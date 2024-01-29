package com.sail.back.global.exception;

import com.sail.back.faq.exception.FAQException;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.security.exception.JwtException;
import com.sail.back.user.exception.UserException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Arrays;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(UserException.class)
    public ResponseEntity userExceptionHandler(UserException e){
        log.debug(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getUserErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getUserErrorCode()),e.getUserErrorCode().getMessage()));
    }

    @ExceptionHandler(FAQException.class)
    public ResponseEntity<MessageUtils> faqExceptionHandler(FAQException e){
        log.debug(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getFaqErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getFaqErrorCode()),e.getFaqErrorCode().getMessage()));
    }

    @ExceptionHandler(JwtException.class)
    public ResponseEntity<MessageUtils> jwtExceptionHandler(JwtException e){
        log.debug(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getJwtErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getJwtErrorCode()),e.getJwtErrorCode().getMessage()));
    }

}
