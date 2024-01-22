package com.sail.back.review.controller;

import com.sail.back.consultant.exception.ConsultantErrorCode;
import com.sail.back.consultant.exception.ConsultantException;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.review.exception.ReviewErrorCode;
import com.sail.back.review.exception.ReviewException;
import com.sail.back.review.model.dto.request.ReviewModifyRequest;
import com.sail.back.review.model.dto.request.ReviewcreateRequest;
import com.sail.back.review.model.dto.response.ReviewListResponse;
import com.sail.back.review.model.dto.response.ReviewModifyResponse;
import com.sail.back.review.model.entity.Review;
import com.sail.back.review.model.repository.ReviewRepository;
import com.sail.back.review.model.service.ReviewService;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.UserRole;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/review")
@RequiredArgsConstructor
@Slf4j
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping("/create")
    public ResponseEntity<MessageUtils> create(@AuthenticationPrincipal User user, @RequestBody ReviewcreateRequest reviewcreateRequest) {
        if (user.getRole().equals(UserRole.CONSULTANT)) {
            throw new ReviewException(ReviewErrorCode.IS_CONSULTANT);
        }

        reviewService.create(user, reviewcreateRequest);

        return ResponseEntity.ok().body(MessageUtils.success());
    }


    @PutMapping("/modify/{reviewid}")
    public ResponseEntity<ReviewModifyResponse> modify(@AuthenticationPrincipal User user, @RequestBody ReviewModifyRequest modifyRequest,
                                                       @PathVariable Long reviewid) {
        return ResponseEntity.ok().body(reviewService.modify(user, modifyRequest,reviewid));
    }


    @DeleteMapping("/delete/{reviewId}")
    public ResponseEntity<MessageUtils> delete(@AuthenticationPrincipal User user, @PathVariable Long reviewId) {
        reviewService.delete(user, reviewId);
        return ResponseEntity.ok().body(MessageUtils.success());
    }


    @GetMapping("/consultant/{consultantId}")
    public ResponseEntity<List<ReviewListResponse>> get(@PathVariable Long consultantId) {

        List<ReviewListResponse> reviewListResponses = reviewService.get(consultantId);
        return ResponseEntity.ok().body(reviewListResponses);
    }

}
