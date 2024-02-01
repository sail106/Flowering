package com.sail.back.consulting.model.entity;

import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consulting.model.dto.response.ConsultingResponse;
import com.sail.back.user.model.dto.response.MyConsultinglistResponse;
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

//    //세션아이디
//    @NotNull
//    private String sessionId;

    public void create(User user, Consultant consultant,
                       LocalDateTime time) {
        this.user = user;
        this.consultant = consultant;
        this.time = time;
    }

//    public void setSession(String sessionId) {
//        this.sessionId = sessionId;
//    }

    public static MyConsultinglistResponse  from(Consulting consulting) {
        return MyConsultinglistResponse.builder()
                .consulting_id(consulting.getConsulting_id())
                .consultant(consulting.getConsultant())
                .time(consulting.getTime())
                .build();
    }

    public ConsultingResponse toResponse(){
        return ConsultingResponse.builder()
                .consultingId(this.consulting_id)
                .consultantData(this.consultant.toResponse())
                .userData(this.user.toResponse())
                .reservationDateTime(this.time)
                .build();
    }


}
