package com.sail.back.consultant.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.career.model.entity.Career;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.hashtag.model.dto.response.HashTagResponse;
import com.sail.back.hashtag.model.entity.HashTag;
import com.sail.back.review.model.dto.response.ReviewResponse;
import com.sail.back.review.model.entity.Review;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class ConsultantResponse {

    private Long consultantId;

    private String selfIntroduce;
    private String simpleIntroduce;
//    private String imgsrc;

    private UserResponse userResponse;
    private double star;
    private int reviewnum;
    private List<HashTagResponse> hashTags = new ArrayList<>();


    public Consultant toEntity() {
        return Consultant
                .builder()
                .consultant_id(this.consultantId)
                .reviewnum(this.reviewnum)
                .simple_introduce(this.simpleIntroduce)
                .self_introduce(this.selfIntroduce)
                .starAverage(this.star)
                .hashTags( this.hashTags.stream().map(HashTagResponse::toEntity).collect(Collectors.toList()))
                .build();
    }
}
