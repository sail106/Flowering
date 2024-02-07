package com.sail.back.consultant.model.dto.response;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.user.model.dto.request.FindRequest;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.User;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class ConsultantDetailResponse {

    private Long consultant_id;

    private String self_introduce;
    private String simple_introduce;

    private UserResponse userResponse;
    private double star;
    private int num;

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
        this.star=consultant.getStarAverage();
    }


}
