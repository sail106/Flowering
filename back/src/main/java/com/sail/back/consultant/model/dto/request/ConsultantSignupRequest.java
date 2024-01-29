package com.sail.back.consultant.model.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class ConsultantSignupRequest {


    private String self_introduce;

    private User user;

    public Consultant toEntity() {
        return Consultant
                .builder()
                .user(this.user)
                .self_introduce(this.self_introduce)
                .build();

    }
}
