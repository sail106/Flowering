package com.sail.back.community.model.dto.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.community.model.entity.Community;
import com.sail.back.user.model.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class CommunityAddRequest {
    private String title;
    private String content;
    private String thumbnailImgUrl;
    private LocalDateTime dDay;

    public Community toEntity(User user){
        return Community.builder()
                .title(this.title)
                .content(this.content)
                .thumbnailImgUrl(this.thumbnailImgUrl)
                .user(user)
                .dDay(this.dDay)
                .build();
    }
}
