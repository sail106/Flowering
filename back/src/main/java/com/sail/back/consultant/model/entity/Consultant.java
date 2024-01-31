package com.sail.back.consultant.model.entity;

import com.sail.back.consultant.model.dto.response.ConsultantDetailResponse;
import com.sail.back.consultant.model.dto.response.ConsultantListResponse;
import com.sail.back.consultant.model.dto.response.ConsultantResponse;
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

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public void update(User user,String self_introduce)
    {
        this.user=user;
        this.self_introduce=self_introduce;
    }
    public ConsultantDetailResponse toConsultantDetailResponse(   )
    {
        return  ConsultantDetailResponse.builder()
                .consultant_id(  consultant_id)
                .self_introduce( self_introduce)
                .user(user)
                .build();

    }
    public ConsultantListResponse from(Consultant consultant)
    {
        return  ConsultantListResponse.builder()
                .consultant_id(consultant.consultant_id)
                .self_introduce(consultant.self_introduce)
                .user(consultant.user)
                .build();

    }

    public ConsultantResponse toResponse(){
        return ConsultantResponse.builder()
                .consultantId(this.consultant_id)
                .consultantDetailData(this.user.toResponse())
                .selfIntroduce(this.self_introduce)
                .build();
    }

}
