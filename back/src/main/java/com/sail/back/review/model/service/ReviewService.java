package com.sail.back.review.model.service;

import com.sail.back.consultant.exception.ConsultantErrorCode;
import com.sail.back.consultant.exception.ConsultantException;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consultant.model.repository.ConsultantRepository;
import com.sail.back.review.exception.ReviewErrorCode;
import com.sail.back.review.exception.ReviewException;
import com.sail.back.review.model.dto.request.ReviewModifyRequest;
import com.sail.back.review.model.dto.request.ReviewcreateRequest;
import com.sail.back.review.model.dto.response.ReviewListResponse;
import com.sail.back.review.model.dto.response.ReviewModifyResponse;
import com.sail.back.review.model.entity.Review;
import com.sail.back.review.model.repository.ReviewRepository;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service("ReviewService")
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final ConsultantRepository consultantRepository;

    public void create(User user, ReviewcreateRequest reviewcreateRequest) {
//        reviewcreateRequest.setUser(user);
//        System.out.println("setttuserrr"+reviewcreateRequest.getUser().getId());


        Consultant consultant = consultantRepository.findById(reviewcreateRequest.getConsultantid()).
                orElseThrow(() -> new ConsultantException(ConsultantErrorCode.NOT_EXISTS_CONSULTANT));

        //여기서 리뷰등록 하면 consultant 의 averagestar 값을 업데이트 해야 한다.
//        consultant.setReviewnum(consultant.getReviewnum() + 1);
//        consultant.setStarAverage(consultant.getStarAverage() + reviewcreateRequest.getStar() / consultant.getReviewnum());


//        if (consultant.getReviews().stream().anyMatch(review -> review.getUser().getId().equals(user.getId()))) {
//            throw new ReviewException(ReviewErrorCode.ALREADY_IN);
//        }

        Review review = reviewcreateRequest.toEntity();
        review.setUser(user);
        review.setConsultant(consultant);


        reviewRepository.save(review);


    }

    public ReviewModifyResponse modify(User user, ReviewModifyRequest modifyRequest, Long reviewid) {

        Review review = reviewRepository.findById(reviewid).orElseThrow(() -> new ReviewException(ReviewErrorCode.NO_REVIEW));

        if (user.getId() != review.getUser().getId()) {
            throw new ReviewException(ReviewErrorCode.NOT_MY_REVIEW);
        }

        review.updateReview(modifyRequest.getStar(), modifyRequest.getContent());

        reviewRepository.save(review);
        ReviewModifyResponse reviewModifyResponse = review.toReviewModifyResponse();

        return reviewModifyResponse;
    }

    public void delete(User user, Long reviewId) {
        Review review = reviewRepository.findById(reviewId).orElseThrow(() -> new ReviewException(ReviewErrorCode.NO_REVIEW));
        if (user.getId() != review.getUser().getId()) {
            throw new ReviewException(ReviewErrorCode.NOT_MY_REVIEW);
        }

        reviewRepository.delete(review);
    }

    public List<ReviewListResponse> get(Long consultantId) {
        Consultant consultant = consultantRepository.findById(consultantId).
                orElseThrow(() -> new ConsultantException(ConsultantErrorCode.NOT_EXISTS_CONSULTANT));

        List<ReviewListResponse> reviewListResponses = reviewRepository.findAllByConsultant(consultant)
                .stream().map(Review::toreviewListResponse).collect(Collectors.toList());

        return reviewListResponses;
    }

}
