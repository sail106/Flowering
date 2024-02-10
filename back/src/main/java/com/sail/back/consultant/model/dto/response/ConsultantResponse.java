package com.sail.back.consultant.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.review.model.dto.response.ReviewResponse;
import com.sail.back.review.model.entity.Review;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

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

    public Consultant toEntity() {
        return Consultant
                .builder()
                .consultant_id(this.consultantId)
                .reviewnum(this.reviewnum)
                .simple_introduce(this.simpleIntroduce)
                .self_introduce(this.selfIntroduce)
                .starAverage(this.star)

                .build();
    }
}
