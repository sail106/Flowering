package com.sail.back.hashtag.model.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.consultant.model.dto.response.ConsultantResponse;
import com.sail.back.hashtag.model.entity.HashTag;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder

public class HashTagUpdateRequest {

    private Long HahstagId;

    private String workplace;

//    public HashTagUpdateRequest from(HashTag hashTag) {
//        return HashTagUpdateRequest.builder()
//                .workplace(hashTag.getWorkplace())
//                .HahstagId(hashTag.getHahstagId())
//                .build();
//    }

}
