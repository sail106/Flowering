package com.sail.back.global.exception;

import com.sail.back.admin.exception.AdminException;
import com.sail.back.community.exception.CommunityException;
import com.sail.back.consulting.exception.ConsultingException;
import com.sail.back.faq.exception.FAQException;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.product.exception.ProductException;
import com.sail.back.report.exception.ReportException;
import com.sail.back.review.exception.ReviewException;
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
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getUserErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getUserErrorCode()),e.getUserErrorCode().getMessage()));
    }

    @ExceptionHandler(FAQException.class)
    public ResponseEntity<MessageUtils> faqExceptionHandler(FAQException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getFaqErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getFaqErrorCode()),e.getFaqErrorCode().getMessage()));
    }

    @ExceptionHandler(JwtException.class)
    public ResponseEntity<MessageUtils> jwtExceptionHandler(JwtException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getJwtErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getJwtErrorCode()),e.getJwtErrorCode().getMessage()));
    }

    @ExceptionHandler(CommunityException.class)
    public ResponseEntity<MessageUtils> communityExceptionHandler(CommunityException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getErrorCode()),e.getErrorCode().getMessage()));
    }

    @ExceptionHandler(ConsultingException.class)
    public ResponseEntity<MessageUtils> consultingExceptionHandler(ConsultingException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getConsultingErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getConsultingErrorCode()),e.getConsultingErrorCode().getMessage()));
    }

    @ExceptionHandler(ReviewException.class)
    public ResponseEntity<MessageUtils> reviewExceptionHandler(ReviewException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getReviewErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getReviewErrorCode()),e.getReviewErrorCode().getMessage()));
    }

    @ExceptionHandler(ProductException.class)
    public ResponseEntity<MessageUtils> productExceptionHandler(ProductException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getErrorCode()),e.getErrorCode().getMessage()));
    }
    @ExceptionHandler(ReportException.class)
    public ResponseEntity<MessageUtils> reportExceptionHandler(ReportException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getErrorCode()),e.getErrorCode().getMessage()));
    }

    @ExceptionHandler(AdminException.class)
    public ResponseEntity<MessageUtils> adminExceptionHandler(AdminException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getAdminErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getAdminErrorCode()),e.getAdminErrorCode().getMessage()));
    }

}
