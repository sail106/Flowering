package com.sail.back.consulting.model.dto.response;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.dto.response.ConsultantResponse;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.User;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class ConsultingmylistResponse {

    private UserResponse userResponse;

    private ConsultantResponse consultantResponse;

    private LocalDate date; //예약을 어느날 할건지

    private LocalTime  time; //예약을 몇시에 할건지

    private String request;//요청사항
    private Long consultingid;//요청사항

    //세션아이디
//    private String sessionId;

    public static ConsultingmylistResponse fromEntity(Consulting consulting) {
        return ConsultingmylistResponse.builder()
                .userResponse(consulting.getUser().toResponse())
                .time(consulting.getTime())
                .consultingid(consulting.getConsulting_id())
                .build();
    }

}
