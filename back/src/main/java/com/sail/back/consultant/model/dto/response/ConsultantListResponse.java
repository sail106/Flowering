package com.sail.back.consultant.model.dto.response;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.hashtag.model.dto.response.HashTagResponse;
import com.sail.back.hashtag.model.entity.HashTag;
import com.sail.back.review.model.entity.Review;
import com.sail.back.user.model.dto.request.FindRequest;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.User;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
@Slf4j
public class ConsultantListResponse {


    private Long consultant_id;

    private String self_introduce;
    private String simple_introduce;

    private UserResponse userResponse;

    private double star;
    private int reviewnum;
    private List<HashTagResponse> hashTagResponses = new ArrayList<>();

    public Consultant from(ConsultantListResponse consultantListResponse) {
        FindRequest findRequest = FindRequest.builder().
                id(true)
                .role(true)
                .gender(true)
                .nickname(true)
                .email(true)
                .birthdate_month(true)
                .birthdate_year(true)
                .status(true)
                .profile_img_url(true)
                .name(true)
                .build();


        List<HashTagResponse> hashTags = consultantListResponse.hashTagResponses;


        return Consultant.builder().
                self_introduce(consultantListResponse.self_introduce)
                .simple_introduce(consultantListResponse.getSimple_introduce())
                .consultant_id(consultantListResponse.consultant_id)
                .user(User.from(consultantListResponse.userResponse))
                .hashTags(consultantListResponse.hashTagResponses.stream().map(HashTagResponse::toEntity).collect(Collectors.toList()))
                .build();


    }

}
