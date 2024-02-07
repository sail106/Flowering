package com.sail.back.consultant.model.entity;

import com.sail.back.consultant.model.dto.response.ConsultantDetailResponse;
import com.sail.back.consultant.model.dto.response.ConsultantListResponse;
import com.sail.back.consultant.model.dto.response.ConsultantResponse;
import com.sail.back.user.model.dto.request.FindRequest;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import lombok.*;


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

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public void update(User user,String self_introduce,String simple_introduce)
    {
        this.user=user;
        this.self_introduce=self_introduce;
        this.simple_introduce=self_introduce;
    }
    public static ConsultantDetailResponse toConsultantDetailResponse(Consultant consultant   )
    {
        FindRequest findRequest= FindRequest.builder().
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

        return  ConsultantDetailResponse.builder()
                .consultant_id(  consultant.getConsultant_id() )
                .self_introduce(consultant.getSelf_introduce())
                .simple_introduce(consultant.getSimple_introduce())
                .userResponse(UserResponse.of( findRequest, consultant.getUser()))
                .build();

    }
    public ConsultantListResponse from(Consultant consultant)
    {
        FindRequest findRequest= FindRequest.builder().
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

        return  ConsultantListResponse.builder()
                .consultant_id(consultant.consultant_id)
                .self_introduce(consultant.self_introduce)
                .self_introduce(consultant.simple_introduce)
                .userResponse( UserResponse.of( findRequest ,consultant.user ) )
                .build();

    }

    public ConsultantResponse toResponse(){
        FindRequest findRequest= FindRequest.builder().
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
                .userResponse(UserResponse.of( findRequest,this.user) )
                .selfIntroduce(this.self_introduce)
                .simpleIntroduce(this.simple_introduce)
                .build();
    }

}
