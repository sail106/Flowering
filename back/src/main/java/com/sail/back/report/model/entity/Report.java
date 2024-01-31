package com.sail.back.report.model.entity;

import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.report.model.dto.response.AnalysisResponse;
import com.sail.back.report.model.dto.response.ReportResponse;
import com.sail.back.report.model.entity.enums.*;
import jakarta.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@AllArgsConstructor
@Table(name = "report")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "report_id")
    private Long reportId;

    @OneToOne
    private Consulting consulting;

    @Enumerated(EnumType.STRING)
    @Column(name = "survey_type")
    private SurveyType surveyType;

    //얼굴형 분석 결과 저장
    @Enumerated(EnumType.STRING)
    @Column(name = "analysis_face_shape")
    private FaceShape faceShape;
    @Column(name = "analysis_face_x1")
    private int faceX1;
    @Column(name = "analysis_face_y1")
    private int faceY1;
    @Column(name = "analysis_face_x2")
    private int faceX2;
    @Column(name = "analysis_face_y2")
    private int faceY2;

    //눈 분석 결과 저장
    @Enumerated(EnumType.STRING)
    @Column(name = "analysis_eye_lid_direction")
    private EyelidDirection eyelidDirection;
    @Enumerated(EnumType.STRING)
    @Column(name = "analysis_eye_lid_width")
    private EyelidWidth eyelidWidth;
    @Enumerated(EnumType.STRING)
    @Column(name = "analysis_eye_lid_size")
    private EyelidSize eyelidSize;
    @Column(name = "analysis_eye_x1")
    private int eyeX1;
    @Column(name = "analysis_eye_y1")
    private int eyeY1;
    @Column(name = "analysis_eye_x2")
    private int eyeX2;
    @Column(name = "analysis_eye_y2")
    private int eyeY2;

    //코 분석 결과 저장
    @Enumerated(EnumType.STRING)
    @Column(name = "analysis_nose_size")
    private NoseSize noseSize;
    @Enumerated(EnumType.STRING)
    @Column(name = "analysis_alar_size")
    private AlarSize alarSize;
    @Column(name = "analysis_nose_x1")
    private int noseX1;
    @Column(name = "analysis_nose_y1")
    private int noseY1;
    @Column(name = "analysis_nose_x2")
    private int noseX2;
    @Column(name = "analysis_nose_y2")
    private int noseY2;


    @Enumerated(EnumType.STRING)
    @Column(name = "analysis_mouth_size")
    private MouthSize mouthSize;
    @Enumerated(EnumType.STRING)
    @Column(name = "analysis_lips_ratio")
    private LipRatio lipRatio;
    @Column(name = "analysis_lips_x1")
    private int lipX1;
    @Column(name = "analysis_lips_y1")
    private int lipY1;
    @Column(name = "analysis_lips_x2")
    private int lipX2;
    @Column(name = "analysis_lips_y2")
    private int lipY2;


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



    public ReportResponse toResponse(){
        return ReportResponse.builder()
                .reportId(this.reportId)
                .surveyData(this.surveyType.toResponse())
                .consultingData(this.consulting.toResponse())
                .build();
    }
}
