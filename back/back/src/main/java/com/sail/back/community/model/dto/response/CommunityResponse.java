package com.sail.back.community.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.community.model.dto.response.enums.CommunityRole;
import com.sail.back.community.model.entity.enums.CommunityStatus;
import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class CommunityResponse {

    private Long communityId;
    private String title;
    private String content;
    private String thumbnailImgUrl;
    private String createrName;
    private LocalDateTime dDay;
    private CommunityStatus status;
    private CommunityRole role;
}
