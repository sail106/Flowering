package com.sail.back.consulting.model.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
//import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.user.model.entity.User;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder

public class ConsultingCreateRequest {


    private LocalTime time; //예약을 몇시에 할건지
    private LocalDate date; //예약을 몇시에 할건지
    private String title; //예약을 몇시에 할건지


    public Consulting toEntity() {
        return Consulting.builder()
                .time(this.time)
                .date(this.date)
                .title(this.title)
                .build(); 
    }

}
