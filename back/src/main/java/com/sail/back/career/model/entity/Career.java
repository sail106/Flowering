//package com.sail.back.career.model.entity;
//
//import com.sail.back.consultant.model.entity.Consultant;
//import jakarta.persistence.*;
//import lombok.*;
//
//import java.time.LocalDate;
//
//@Getter
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
//@Entity
//public class Career {
//
// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// private Long careerId;
//
// @OneToOne
// @JoinColumn(name = "consultant_id")
// private Consultant consultant;
//
// @Column(nullable = false)
// private String workplace;
//
// @Column(nullable = false)
// private LocalDate startDateOfEmployment;
//
// private LocalDate endDateOfEmployment;
//
//}
