package com.sail.back.consulting.model.dto.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.dto.response.ConsultantResponse;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.user.model.dto.response.UserResponse;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class ConsultingIsActiveResponse {

    LocalTime  time;
    boolean active;


//    public static  ConsultingIsActiveResponse fromEntity(Consulting consulting) {
//        return ConsultingIsActiveResponse.builder()
//                .active
//    }
}
