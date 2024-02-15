package com.sail.back.user.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.dto.response.ConsultantResponse;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class MyConsultinglistResponse {

    Long consulting_id;

    private ConsultantResponse consultantResponse;

    private LocalDate date; //예약일
    private LocalTime time; //예약시간

    private String sessionId;

    private String title; //제목

}
