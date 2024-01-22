package com.sail.back.consultant.model.dto.response;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.entity.Consultant;
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

    private User user;

    public Consultant from(ConsultantListResponse consultantListResponse) {
        return Consultant.builder().
                self_introduce(consultantListResponse.self_introduce)
                .consultant_id(consultantListResponse.consultant_id)
                .user(consultantListResponse.user)
                .build();
    }

}
