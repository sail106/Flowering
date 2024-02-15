package com.sail.back.consulting.model.dto.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.dto.response.ConsultantResponse;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.user.model.dto.response.UserResponse;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class ConsultingIsActiveResponse {

    Long consultingId;
    boolean active;
    private UserResponse userResponse;

    private ConsultantResponse consultantData;

    private LocalDateTime reservationDateTime;


    public static  ConsultingIsActiveResponse fromEntity(Consulting consulting) {
        return ConsultingIsActiveResponse.builder()
                .active(consulting.isActive())
                .consultingId(consulting.getConsulting_id())
                .reservationDateTime(consulting.getTime())
                .build();
    }
}
