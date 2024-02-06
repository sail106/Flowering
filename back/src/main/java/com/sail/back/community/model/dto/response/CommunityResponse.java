package com.sail.back.community.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.community.model.dto.response.enums.CommunityRole;
import com.sail.back.community.model.entity.Community;
import com.sail.back.community.model.entity.enums.CommunityStatus;
import com.sail.back.user.model.dto.request.FindRequest;
import com.sail.back.user.model.dto.response.UserResponse;
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
    private String openDay;
    private String time;
    private CommunityStatus status;
    private CommunityRole role;
    private UserResponse userResponse; //방장 정보

    public static CommunityResponse fromEntity(Community community
    ) {

        FindRequest findRequest = FindRequest.builder().
                id(true)
                .role(true)
                .gender(true)
                .nickname(true)
                .email(true)
                .birthdate_month(true)
                .birthdate_year(true)
                .status(true)
                .profile_img_url(true)
                .name(true)
                .build();

        return CommunityResponse.builder()
                .userResponse(UserResponse.of(findRequest, community.getUser())) //방장
                .status(community.getStatus())
                .communityId(community.getId())

                .build();
    }
}
