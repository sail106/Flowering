package com.sail.back.consultant.model.dto.response;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.hashtag.model.dto.response.HashTagResponse;
import com.sail.back.hashtag.model.entity.HashTag;
import com.sail.back.hashtag.model.repository.HashTagRepository;
import com.sail.back.review.model.dto.response.ReviewResponse;
import com.sail.back.review.model.entity.Review;
import com.sail.back.user.model.dto.request.FindRequest;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.User;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class ConsultantDetailResponse {

    private Long consultant_id;

    private String self_introduce;
    private String simple_introduce;
//    private String imgsrc;

    private UserResponse userResponse;
    private double star;
    private int num;
    private List<HashTagResponse> hashTags;
    private List<ReviewResponse> reviews;

    //
//    public Consultant from(ConsultantDetailResponse consultantListResponse) {
//        return Consultant.builder().
//                self_introduce(consultantListResponse.self_introduce)
//                .consultant_id(consultantListResponse.consultant_id)
//                .user(consultantListResponse.user)
//                .build();
//    }
    public ConsultantDetailResponse(Consultant consultant) {
        this.consultant_id = consultant.getConsultant_id();
        this.self_introduce = consultant.getSelf_introduce();
        this.simple_introduce = consultant.getSimple_introduce();
        this.userResponse = consultant.getUser().toResponse();
        this.star = consultant.getStarAverage();
        this.hashTags = consultant.getHashTags().stream().map(HashTag::toHashTagResponse).collect(Collectors.toList());
        this.reviews =  consultant.getReviews().stream().map(Review::from).collect(Collectors.toList());
    }

    public void setProfileImgUrl(String profileImgUrl) {
        this.userResponse.setProfileImgUrl(profileImgUrl);
    }

}
