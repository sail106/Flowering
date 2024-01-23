package com.sail.back.faq.model.entity;

import com.sail.back.faq.model.dto.response.FAQResponse;
import com.sail.back.global.domain.BaseTimeEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.*;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import java.sql.Timestamp;
import java.time.LocalDateTime;


@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "faq")
@Builder
@AllArgsConstructor
public class FAQ {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 @Column(name = "faq_id")
 private Long faqId;

 @Column(length = 50)
 private String title;

 @Column(length = 255)
 private String content;

 @Column(name = "create_at", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
 private LocalDateTime createAt;

 public FAQResponse toResponse(){
  return FAQResponse.builder()
          .faqId(this.faqId)
          .title(this.title)
          .content(this.content)
          .build();
 }
}
