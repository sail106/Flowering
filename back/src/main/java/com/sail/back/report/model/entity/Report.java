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
    @Column(name = "survey_type")
    private SurveyType surveyType;

    @Enumerated(EnumType.STRING)
    @Column(name = "analysis_face_type")
    private AnalysisFaceType analysisFaceType;


    @Enumerated(EnumType.STRING)
    @Column(name = "analysis_eyebrow_type")
    private AnalysisEyebrowType analysisEyebrowType;


    @Enumerated(EnumType.STRING)
    @Column(name = "analysis_eye_type")
    private AnalysisEyeType analysisEyeType;


    @Enumerated(EnumType.STRING)
    @Column(name = "analysis_nose_type")
    private AnalysisNoseType analysisNoseType;


    @Enumerated(EnumType.STRING)
    @Column(name = "analysis_lips_type")
    private AnalysisLipsType analysisLipsType;


    @Column(length = 100, name = "analysis_result_pores")
    private String analysisResultPores;

    @Column(length = 100, name = "analysis_result_wrinkles")
    private String analysisResultWrinkles;

    @Column(length = 100, name = "analysis_result_acne")
    private String analysisResultAcne;

    @Column(length = 100, name = "analysis_result_dark_circles")
    private String analysisResultDarkCircles;

    @Column(length = 255, name = "analysis_result_photo_url")
    private String analysisResultPhotoUrl;

    @Column(length = 50, name = "skincare_skinstate")
    private String skincareSkinState;

    @Column(length = 255, name = "skincare_solution")
    private String skincareSolution;

    @Column(length = 50, name = "skincare_morning")
    private String skincareMorning;

    @Column(length = 50, name = "skincare_night")
    private String skincareNight;

    @Column(length = 50, name = "makeup_facetype")
    private String makeUpFaceType;

    @Column(length = 50, name = "makeup_facialexpression")
    private String makeUpFacialExpression;

    @Column(length = 255, name = "makeup_solution")
    private String makeupSolution;

    @Column(length = 50, name = "makeup_shading")
    private String makeupShading;

    @Column(length = 50, name = "makeup_blusher")
    private String makeupBlusher;

    @Column(length = 50, name = "makeup_highlighting")
    private String makeupHighlighting;

    @Column(length = 50, name = "makeup_lipmakeup")
    private String makeupLipMakeup;

    @Column(length = 50,name = "makeup_eyemakeup")
    private String makeupEyeMakeup;

    @Column(length = 50, name = "makeup_skinmakeup")
    private String makeupSkinMakeup;

    @Column(length = 50, name = "hairstyle_haircolor")
    private String hairstyleHairColor;

    @Column(length = 50, name = "hairstyle_hairstyle")
    private String hairstyleHairstyle;

    @Column(length = 255, name = "hairstyle_solution")
    private String hairstyleSolution;

}
