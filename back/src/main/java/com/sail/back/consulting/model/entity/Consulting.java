package com.sail.back.consulting.model.entity;

import com.sail.back.consultant.model.entity.Consultant;
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
    private LocalDateTime time; //예약일

    @NotNull
    private String title; //제목

    private boolean active;

    public void setActive(boolean active) {
        this.active = active;
    }


    public void setdatetime(LocalDateTime time) {
        this.time = time;
    }

//    //세션아이디
//    @NotNull
//    private String sessionId;

    public void create(User user, Consultant consultant
                        ) {
        this.user = user;
        this.consultant = consultant;
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
                .title(consulting.getTitle())
                .build();
    }

    public ConsultingResponse toResponse() {
        return ConsultingResponse.builder()
                .consultingId(this.consulting_id)
                .consultantData(this.consultant.toResponse())
                .userResponse(this.user.toResponse())
                .reservationDateTime(this.time)
                .active(this.active)
                .build();
    }


}
