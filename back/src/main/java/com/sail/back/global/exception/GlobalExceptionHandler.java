package com.sail.back.global.exception;

import com.sail.back.admin.exception.AdminException;
import com.sail.back.community.exception.CommunityException;
import com.sail.back.consulting.exception.ConsultingException;
import com.sail.back.faq.exception.FAQException;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.product.exception.ProductException;
import com.sail.back.report.exception.ReportException;
import com.sail.back.review.exception.ReviewException;
import com.sail.back.security.exception.AuthException;
import com.sail.back.security.exception.JwtException;
import com.sail.back.user.exception.UserException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Arrays;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(UserException.class)
    public ResponseEntity userExceptionHandler(UserException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getUserErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getUserErrorCode()),e.getMessage()));
    }

    @ExceptionHandler(FAQException.class)
    public ResponseEntity<MessageUtils> faqExceptionHandler(FAQException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getFaqErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getFaqErrorCode()),e.getMessage()));
    }

    @ExceptionHandler(JwtException.class)
    public ResponseEntity<MessageUtils> jwtExceptionHandler(JwtException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getJwtErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getJwtErrorCode()),e.getMessage()));
    }

    @ExceptionHandler(CommunityException.class)
    public ResponseEntity<MessageUtils> communityExceptionHandler(CommunityException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getErrorCode()),e.getMessage()));
    }

    @ExceptionHandler(ConsultingException.class)
    public ResponseEntity<MessageUtils> consultingExceptionHandler(ConsultingException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getConsultingErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getConsultingErrorCode()),e.getMessage()));
    }

    @ExceptionHandler(ReviewException.class)
    public ResponseEntity<MessageUtils> reviewExceptionHandler(ReviewException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getReviewErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getReviewErrorCode()),e.getMessage()));
    }

    @ExceptionHandler(ProductException.class)
    public ResponseEntity<MessageUtils> productExceptionHandler(ProductException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getErrorCode()),e.getMessage()));
    }
    @ExceptionHandler(ReportException.class)
    public ResponseEntity<MessageUtils> reportExceptionHandler(ReportException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getErrorCode()),e.getMessage()));
    }

    @ExceptionHandler(AdminException.class)
    public ResponseEntity<MessageUtils> adminExceptionHandler(AdminException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getAdminErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getAdminErrorCode()),e.getMessage()));
    }

    @ExceptionHandler(AuthException.class)
    public ResponseEntity<MessageUtils> authExceptionHandler(AuthException e){
        log.error(Arrays.toString(e.getStackTrace()));
        return ResponseEntity.status(e.getErrorCode().getHttpStatus())
                .body(MessageUtils.fail(String.valueOf(e.getErrorCode()),e.getMessage()));
    }
    @ExceptionHandler({MethodArgumentNotValidException.class})
    public ResponseEntity<MessageUtils> validException(MethodArgumentNotValidException exception) {
        BindingResult bindingResult = exception.getBindingResult();

        StringBuilder errorMessages = new StringBuilder();
        for (FieldError fieldError : bindingResult.getFieldErrors()) {
            errorMessages.append("[");
            errorMessages.append(fieldError.getField());
            errorMessages.append("](은)는 ");
            errorMessages.append(fieldError.getDefaultMessage());
            errorMessages.append("\n");
        }
        log.error(errorMessages.toString());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(MessageUtils.fail(HttpStatus.BAD_REQUEST.name(),errorMessages.toString()));
    }

//    @ExceptionHandler(Exception.class)
//    public ResponseEntity<MessageUtils> authExceptionHandler(Exception e){
//        log.error("================================");
//        log.error(Arrays.toString(e.getStackTrace()));
//        log.error("================================");
//        return ResponseEntity.status(INTERNAL_SERVER_ERROR)
//                .body(MessageUtils.fail(INTERNAL_SERVER_ERROR.name(), "이유를 모르는 서버 에러 입니다. 죄송합니다."));
//    }
}
