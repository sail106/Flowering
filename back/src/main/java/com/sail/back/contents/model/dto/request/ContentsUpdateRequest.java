package com.sail.back.contents.model.dto.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.contents.model.entity.Contents;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class ContentsUpdateRequest {

    @NotNull
    private Long contentsId;
    @NotNull
    private String title;
    @NotNull
    private String content;
    @NotNull
    private String category;

    public Contents toEntity(){
        return Contents.builder()
                .content(this.content)
                .title(this.title)
                .category(this.category)
                .build();
    }
}
