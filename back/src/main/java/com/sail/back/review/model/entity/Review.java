package com.sail.back.review.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.sail.back.consultant.model.entity.Consultant;
 import com.sail.back.review.model.dto.response.ReviewModifyResponse;
import com.sail.back.review.model.dto.response.ReviewResponse;
import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import lombok.*;


@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "review")
@Builder
@AllArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long review_id;

    @ManyToOne
    @JoinColumn(name = "consultant_id")
    @JsonBackReference
    private Consultant consultant;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(length = 200)
    private String content;

    private int star;

    public void updateReview(int newStar, String newContent) {
        this.star = newStar;
        this.content = newContent;

    }


    public static ReviewResponse from(Review review) {
        return ReviewResponse.builder()
                .review_id(review.getReview_id())
                .star(review.getStar())
//                .consultantDetailResponse(Consultant.toConsultantDetailResponse(review.getConsultant()))
                .user(review.getUser())
                .content(review.getContent())
                .build();
    }

    public ReviewModifyResponse toReviewModifyResponse() {
        return ReviewModifyResponse.builder()
                .review_id(review_id)
                .star(star)
                .consultantDetailResponse(Consultant.toConsultantDetailResponse(consultant))
                .content(content)
                .build();
    }

    public void setConsultant(Consultant consultant) {
        this.consultant = consultant;

        double newStarAverage = ((consultant.getStarAverage() * consultant.getReviewnum() + this.getStar()) / (consultant.getReviewnum() + 1));
        ;
        consultant.setReviewnum(consultant.getReviewnum() + 1);

        consultant.setStarAverage(newStarAverage);
    }


    public void removeConsultant(Consultant consultant) {
        this.consultant = consultant;

        double newStarAverage = ((consultant.getStarAverage() * consultant.getReviewnum() - this.getStar()) / (consultant.getReviewnum() - 1));
        ;
        consultant.setReviewnum(consultant.getReviewnum() - 1);

        consultant.setStarAverage(newStarAverage);
    }

    public void setUser(User user) {
        this.user = user;

    }


}
