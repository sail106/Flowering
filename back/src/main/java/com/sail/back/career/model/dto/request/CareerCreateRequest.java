package com.sail.back.career.model.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.career.model.entity.Career;
import com.sail.back.consultant.model.entity.Consultant;
import lombok.*;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class CareerCreateRequest {
    private Long consultantId;
    private String workplace;
    private LocalDate startDateOfEmployment;
    private LocalDate endDateOfEmployment;

    public Career toEntity(Consultant consultant) {
        return Career.builder()
                .careerId(this.consultantId )
                .endDateOfEmployment(this.endDateOfEmployment )
                .startDateOfEmployment(this.startDateOfEmployment)
                .workplace(this.workplace)
                .consultant(consultant)
                .build();
    }
}
