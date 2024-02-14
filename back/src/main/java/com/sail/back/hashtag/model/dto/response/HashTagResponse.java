package com.sail.back.hashtag.model.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.dto.response.ConsultantResponse;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.hashtag.model.entity.HashTag;
import com.sail.back.user.model.dto.response.UserResponse;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class HashTagResponse {
//    @JsonIgnore
//    private ConsultantResponse consultantResponse;

    private String workplace;

    public static HashTagResponse from(HashTag hashTag) {
        return HashTagResponse.builder()
                .workplace(hashTag.getWorkplace())
                .build();
    }

    public HashTag toEntity() {
        return  HashTag.builder()
//                .consultant( this.consultantResponse.toEntity())
                .workplace(this.workplace)

                .build();

    }


}
