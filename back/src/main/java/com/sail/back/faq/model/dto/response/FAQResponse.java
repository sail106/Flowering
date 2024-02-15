package com.sail.back.faq.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;


@AllArgsConstructor // 모든 private 필드 기준으로 생성자 생성
@NoArgsConstructor // 기본 생성자 생성
@Getter @Setter // 게터, 세터 생성
@JsonInclude(JsonInclude.Include.NON_NULL) // NULL 값일 때 보여주지 않음
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class) // 프론트에 값 돌려줄때 , 카멜케이스를 스네이크 케이스로 자동 변환
@Builder // 빌더 패턴, new 대용으로 사용 가능
public class FAQResponse {

    private Long faqId;
    private String title;
    private String content;
}
