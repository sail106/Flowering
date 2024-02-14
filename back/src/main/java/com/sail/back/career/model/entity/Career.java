package com.sail.back.career.model.entity;

import com.sail.back.career.model.dto.response.CareerResponse;
import com.sail.back.consultant.model.entity.Consultant;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@AllArgsConstructor

public class Career {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long careerId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "consultant_id")
    private Consultant consultant;

    @Column(nullable = false)
    private String workplace;

    private LocalDate startDateOfEmployment;

    private LocalDate endDateOfEmployment;

    public void setConsultant(Consultant consultant) {
        this.consultant = consultant;
    }

    public static CareerResponse toresponse(Career career) {
        return CareerResponse.builder()
                .startDateOfEmployment(career.getStartDateOfEmployment())
                .endDateOfEmployment(career.getEndDateOfEmployment())
                .workplace(career.getWorkplace())
                .build();

    }

}
