package com.sail.back.report.model.entity;

import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.report.model.entity.enums.*;
import jakarta.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity

@AllArgsConstructor
@Table(name = "report")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long report_id;

    @OneToOne
    private Consulting consulting;

    @Enumerated(EnumType.STRING)
    private SurveyType surveyType;

    @Enumerated(EnumType.STRING)
    private Analysis_face_type analysis_face_type;

    @Column(length = 255)
    private String analysis_face_content;

    @Enumerated(EnumType.STRING)
    private Analysis_eyebrow_type analysis_eyebrow_type;

    @Column(length = 255)
    private String analysis_eyebrow_content;

    @Enumerated(EnumType.STRING)
    private Analysis_eye_type analysis_eye_type;

    @Column(length = 255)
    private String analysis_eye_content;

    @Enumerated(EnumType.STRING)
    private Analysis_nose_type analysis_nose_type;

    @Column(length = 255)
    private String analysis_nose_content;

    @Enumerated(EnumType.STRING)
    private Analysis_lips_type analysis_lips_type;

    @Column(length = 255)
    private String analysis_lips_content;

    @Column(length = 100)
    private String analysis_result_pores;

    @Column(length = 100)
    private String analysis_result_wrinkles;

    @Column(length = 100)
    private String analysis_result_acne;

    @Column(length = 100)
    private String analysis_result_dark_circles;

    @Column(length = 255)
    private String analysis_result_photo;

    @Column(length = 50)
    private String skincare_skinstate;

    @Column(length = 255)
    private String skincare_solution;

    @Column(length = 50)
    private String skincare_morning;

    @Column(length = 50)
    private String skincare_night;

    @Column(length = 50)
    private String makeup_facetype;

    @Column(length = 50)
    private String makeup_facialexpression;

    @Column(length = 255)
    private String makeup_solution;

    @Column(length = 50)
    private String makeup_shading;

    @Column(length = 50)
    private String makeup_blusher;

    @Column(length = 50)
    private String makeup_highlighting;

    @Column(length = 50)
    private String makeup_lipmakeup;

    @Column(length = 50)
    private String makeup_eyemakeup;

    @Column(length = 50)
    private String makeup_skinmakeup;

    @Column(length = 50)
    private String hairstyle_haircolor;

    @Column(length = 50)
    private String hairstyle_hairstyle;

    @Column(length = 255)
    private String hairstyle_solution;

}
