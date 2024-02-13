package com.sail.back.review.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.dto.response.ConsultantDetailResponse;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.review.model.entity.Review;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class ReviewResponse {


    private Long review_id;

//    private ConsultantDetailResponse consultantDetailResponse;

    private String content;
    private UserResponse userResponse;

    private User user;

    private int star;

    public static  ReviewResponse fromEntity(Review review)
    {
        return  ReviewResponse.builder()
                .review_id(review.getReview_id())
                .star(review.getStar())
                .userResponse(review.getUser().toResponse())

                .build();
    }

}
