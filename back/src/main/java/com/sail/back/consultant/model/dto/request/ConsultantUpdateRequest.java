package com.sail.back.consultant.model.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.user.model.entity.User;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class ConsultantUpdateRequest {


    private String self_introduce;
    private String simple_introduce;


    public Consultant toEntity() {
        return Consultant
                .builder()
                .self_introduce(this.self_introduce)
                .simple_introduce(this.simple_introduce)
                .build();

    }
}
