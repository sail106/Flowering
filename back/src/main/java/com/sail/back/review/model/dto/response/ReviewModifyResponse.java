package com.sail.back.review.model.dto.response;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.review.model.entity.Review;
import com.sail.back.user.model.entity.User;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class ReviewModifyResponse {

    private Long review_id;

    private User user;

    private String content;

    private int star;

    private Consultant consultant;

    public Review toEntity() {
        return Review.builder()
                .consultant(this.getConsultant())
                .star(this.getStar())
                .content(this.getContent())
                .build();
    }

}
