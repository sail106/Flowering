package com.sail.back.hashtag.model.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.hashtag.model.entity.HashTag;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class HashTagCreateRequest {


    private String workplace;

    public HashTag toEntity() {
        return HashTag.builder()
                .workplace(this.workplace)
                .build();
    }
}
