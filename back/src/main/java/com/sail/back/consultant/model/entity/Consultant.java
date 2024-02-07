package com.sail.back.consultant.model.entity;

import com.sail.back.consultant.model.dto.response.ConsultantDetailResponse;
import com.sail.back.consultant.model.dto.response.ConsultantListResponse;
import com.sail.back.consultant.model.dto.response.ConsultantResponse;
import com.sail.back.review.model.entity.Review;
import com.sail.back.user.model.dto.request.FindRequest;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "consultants")
@Builder
@AllArgsConstructor

public class Consultant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long consultant_id;

    private String self_introduce;

    private String simple_introduce;


    @OneToMany(mappedBy = "consultant")
    private List<Review> reviews;

    private double star;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public double getStarAverage() {

        if (reviews == null || reviews.isEmpty()) {
            return 0;
        }

        int sum = 0;
        for (Review review : reviews) {
            sum += review.getStar();
        }
        return (double) sum / reviews.size();
    }


    public void update(User user, String self_introduce, String simple_introduce) {
        this.user = user;
        this.self_introduce = self_introduce;
        this.simple_introduce = simple_introduce;
    }


    public static ConsultantDetailResponse toConsultantDetailResponse(Consultant consultant) {
        return ConsultantDetailResponse.builder()
                .consultant_id(consultant.getConsultant_id())
                .self_introduce(consultant.getSelf_introduce())
                .simple_introduce(consultant.getSimple_introduce())
                .userResponse(consultant.getUser().toResponse())
                .star(consultant.getStarAverage())
                .build();
    }

    public ConsultantListResponse from(Consultant consultant) {
        return ConsultantListResponse.builder()
                .consultant_id(consultant.consultant_id)
                .self_introduce(consultant.self_introduce)
                .simple_introduce(consultant.simple_introduce)
                .userResponse(consultant.user.toResponse())
                .star(consultant.getStarAverage())
                .build();

    }

    public ConsultantResponse toResponse() {
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

                .build();

        return ConsultantResponse.builder()
                .consultantId(this.consultant_id)
                .userResponse(this.user.toResponse())
                .selfIntroduce(this.self_introduce)
                .simpleIntroduce(this.simple_introduce)
                .star(this.getStarAverage())
                .build();
    }

}
