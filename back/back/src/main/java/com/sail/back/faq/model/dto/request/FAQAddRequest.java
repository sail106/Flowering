package com.sail.back.faq.model.dto.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.faq.model.entity.FAQ;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class FAQAddRequest {

    private String title;
    private String content;

    public FAQ toEntity(){
        return FAQ.builder()
                .content(this.content)
                .title(this.title)
                .build();
    }
}
