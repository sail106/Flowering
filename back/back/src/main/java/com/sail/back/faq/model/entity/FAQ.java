package com.sail.back.faq.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;


@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "faq")
public class FAQ {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long faq_id;

 @Column(length = 50)
 private String title;

 @Column(length = 255)
 private String content;

}
