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
public class ConsultantListResponse {


    private Long consultant_id;

    private String self_introduce;
    private String simple_introduce;

    private UserResponse userResponse;

    private double star;
    private int reviewnum;

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

        return Consultant.builder().
                self_introduce(consultantListResponse.self_introduce)
                .simple_introduce(consultantListResponse.getSimple_introduce())
                .consultant_id(consultantListResponse.consultant_id)
                .user(User.from(consultantListResponse.userResponse))
                .build();


    }

}
