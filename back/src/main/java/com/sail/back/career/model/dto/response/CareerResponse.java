package com.sail.back.career.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.career.model.entity.Career;
import lombok.*;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class CareerResponse {
    private Long consultantId;
    private String workplace;
    private LocalDate startDateOfEmployment;
    private LocalDate endDateOfEmployment;

    public static CareerResponse from(Career career) {
    return CareerResponse.builder()
            .consultantId(career.getConsultant().getConsultant_id())
            .endDateOfEmployment(career.getEndDateOfEmployment())
            .workplace(career.getWorkplace())
            .startDateOfEmployment(career.getStartDateOfEmployment())
            .build();
    }
}
