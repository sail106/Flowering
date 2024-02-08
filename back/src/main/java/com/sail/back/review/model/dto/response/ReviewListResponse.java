//package com.sail.back.review.model.dto.response;
//
//import com.fasterxml.jackson.annotation.JsonInclude;
//import com.fasterxml.jackson.databind.PropertyNamingStrategy;
//import com.fasterxml.jackson.databind.annotation.JsonNaming;
//import com.sail.back.consultant.model.dto.response.ConsultantDetailResponse;
//import com.sail.back.consultant.model.entity.Consultant;
//import com.sail.back.review.model.entity.Review;
//import com.sail.back.user.model.entity.User;
//import jakarta.persistence.*;
//import lombok.*;
//
//@AllArgsConstructor
//@NoArgsConstructor
//@Getter
//@Setter
//@JsonInclude(JsonInclude.Include.NON_NULL)
//@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
//@Builder
//public class ReviewListResponse {
//
//
//    private Long review_id;
//
//    private ConsultantDetailResponse consultantDetailResponse;
//
//    private String content;
//    private User user;
//
//    private int star;
//
//    public Review toEntity(ReviewListResponse reviewListResponse){
//        return Review.builder()
//                .user(reviewListResponse.user)
//                .content(reviewListResponse.content)
//                .star(reviewListResponse.star)
//                .content(reviewListResponse.content)
//                .review_id(reviewListResponse.review_id)
//                .build();
//    }
//
//
//}
