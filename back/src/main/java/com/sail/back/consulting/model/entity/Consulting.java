package com.sail.back.consulting.model.entity;

import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consulting.model.dto.request.ConsultingCreateRequest;
import com.sail.back.consulting.model.dto.response.ConsultingIsActiveResponse;
import com.sail.back.consulting.model.dto.response.ConsultingResponse;
import com.sail.back.user.model.dto.request.FindRequest;
import com.sail.back.user.model.dto.response.MyConsultinglistResponse;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Builder
@AllArgsConstructor
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity

public class Consulting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long consulting_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "consultant_id")
    private Consultant consultant;

    @NotNull
    private LocalTime time; //예약일

    private LocalDate date; //예약일

    @NotNull
    private String title; //제목

    private boolean active;

    public void setActive(boolean active) {
        this.active = active;
    }


    public void setdate(LocalDate date) {
        this.date = date;
    }

    public void settime(LocalTime time) {
        this.time = time;
    }

//    //세션아이디
//    @NotNull
//    private String sessionId;

    public void create(User user, Consultant consultant, ConsultingCreateRequest consultingCreateRequest
    ) {
        this.user = user;
        this.consultant = consultant;
        this.time = consultingCreateRequest.getTime();
        this.date = consultingCreateRequest.getDate();
//        this.time = time;
//        this.title=title;
    }

//    public void setSession(String sessionId) {
//        this.sessionId = sessionId;
//    }

    public static MyConsultinglistResponse from(Consulting consulting) {
        return MyConsultinglistResponse.builder()
                .consulting_id(consulting.getConsulting_id())
                .consultantResponse(consulting.getConsultant().toResponse())
                .time(consulting.getTime())
                .date(consulting.getDate())
                .title(consulting.getTitle())
                .build();
    }

    public ConsultingResponse toResponse() {
        return ConsultingResponse.builder()
                .consultingId(this.consulting_id)
                .consultantData(this.consultant.toResponse())
                .userResponse(this.user.toResponse())
                .time(this.time)
                .date(this.date)
                .active(this.active)
                .build();
    }


}
