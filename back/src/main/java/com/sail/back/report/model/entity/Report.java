package com.sail.back.report.model.entity;

import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.global.utils.analysis.Skin;
import com.sail.back.global.utils.analysis.XoneYoneXtwoYtwo;
import com.sail.back.product.model.dto.response.ProductResponse;
import com.sail.back.product.model.entity.Product;
import com.sail.back.report.model.dto.request.SaveExpertOpinionRequest;
import com.sail.back.report.model.dto.request.SaveSurveyRequest;
import com.sail.back.report.model.dto.response.AnalysisResponse;
import com.sail.back.report.model.dto.response.ExpertOpinionResponse;
import com.sail.back.report.model.dto.response.ReportResponse;
import com.sail.back.report.model.dto.response.analysis.*;
import com.sail.back.report.model.entity.enums.*;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

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
    private int analysisResultPores;

    @Column(length = 100, name = "analysis_result_glabella_wrinkles")
    private int analysisResultGlabellaWrinkle;

    @Column(length = 100, name = "analysis_result_forehead_wrinkles")
    private int analysisResultForeheadWrinkle;

    @Column(length = 100, name = "analysis_result_acne")
    private int analysisResultAcne;

    @Column(length = 100, name = "analysis_result_dark_circles")
    private int analysisResultDarkCircles;


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



    public ReportResponse toResponse(List<ProductResponse> recommendedSkinProducts, List<ProductResponse> recommendedMakeUpProducts){
        return ReportResponse.builder()
                .reportId(this.reportId)
                .surveyData(this.surveyType.toResponse())
                .consultingData(this.consulting.toResponse())
                .analysisData(AnalysisResponse.builder()
                        .eyeData(EyeResponse.builder()
                                .eyelidDirection(this.eyelidDirection)
                                .eyelidSize(this.eyelidSize)
                                .eyelidWidth(this.eyelidWidth)
                                .x1(this.eyeX1)
                                .y1(this.eyeY1)
                                .x2(this.eyeX2)
                                .y2(this.eyeY2)
                                .build())
                        .faceShapeData(FaceShapeResponse.builder()
                                .faceShape(this.faceShape)
                                .x1(this.faceX1)
                                .y1(this.faceY1)
                                .x2(this.faceX2)
                                .y2(this.faceY2)
                                .build())
                        .mouthData(MouthResponse.builder()
                                .mouthSize(this.mouthSize)
                                .lipRatio(this.lipRatio)
                                .x1(this.lipX1)
                                .y1(this.lipY1)
                                .x2(this.lipX2)
                                .y2(this.lipY2)
                                .build())
                        .noseData(NoseResponse.builder()
                                .alarSize(this.alarSize)
                                .noseSize(this.noseSize)
                                .x1(this.noseX1)
                                .y1(this.noseY1)
                                .x2(this.noseX2)
                                .y2(this.noseY2)
                                .build())
                        .skinData(SkinResponse.builder()
                                .analysisResultAcne(this.analysisResultAcne)
                                .analysisResultPores(this.analysisResultPores)
                                .analysisResultDarkCircles(this.analysisResultDarkCircles)
                                .analysisResultForeheadWrinkle(this.analysisResultForeheadWrinkle)
                                .analysisResultGlabellaWrinkle(this.analysisResultGlabellaWrinkle)
                                .build())
                        .analysisResultPhotoUrl(this.analysisResultPhotoUrl)
                        .build())
                .expertOpinionData(ExpertOpinionResponse.builder()
                        .skincareSkinState(this.skincareSkinState)
                        .skincareSolution(this.skincareSolution)
                        .skincareMorning(this.skincareMorning)
                        .skincareNight(this.skincareNight)
                        .makeupFacetype(this.makeUpFaceType)
                        .makeupFacialexpression(this.makeUpFacialExpression)
                        .makeupSolution(this.makeupSolution)
                        .makeupShading(this.makeupShading)
                        .makeupBlusher(this.makeupBlusher)
                        .makeupHighlighting(this.makeupHighlighting)
                        .makeupLipmakeup(this.makeupLipMakeup)
                        .makeupEyemakeup(this.makeupEyeMakeup)
                        .makeupSkinmakeup(this.makeupSkinMakeup)
                        .hairstyleHaircolor(this.hairstyleHairColor)
                        .hairstyleHairstyle(this.hairstyleHairstyle)
                        .hairstyleSolution(this.hairstyleSolution)
                        .recommendedSkinProducts(recommendedSkinProducts)
                        .recommendedMakeUpProducts(recommendedMakeUpProducts)
                        .build())
                .build();
    }

    public void surveySave(SaveSurveyRequest request){
        this.surveyType = request.getSurveyType();
    }

    public void expertOpinionSave(SaveExpertOpinionRequest request){
        this.skincareSkinState = request.getSkincareSkinState();
        this.skincareSolution = request.getSkincareSolution();
        this.skincareMorning = request.getSkincareMorning();
        this.skincareNight = request.getSkincareNight();
        this.makeUpFaceType = request.getMakeupFacetype();
        this.makeUpFacialExpression = request.getMakeupFacialexpression();
        this.makeupSolution = request.getMakeupSolution();
        this.makeupShading = request.getMakeupShading();
        this.makeupBlusher = request.getMakeupBlusher();
        this.makeupHighlighting = request.getMakeupHighlighting();
        this.makeupLipMakeup = request.getMakeupLipmakeup();
        this.makeupEyeMakeup = request.getMakeupEyemakeup();
        this.makeupSkinMakeup = request.getMakeupSkinmakeup();
        this.hairstyleHairColor = request.getHairstyleHaircolor();
        this.hairstyleHairstyle = request.getHairstyleHairstyle();
        this.hairstyleSolution = request.getHairstyleSolution();
    }
    public void analysisSave(
            FaceShape faceShape,
            XoneYoneXtwoYtwo faceCoordinate,
            NoseSize noseSize,
            AlarSize alarSize,
            XoneYoneXtwoYtwo noseCoordinate,
            EyelidDirection eyelidDirection,
            EyelidWidth eyelidWidth,
            EyelidSize eyelidSize,
            XoneYoneXtwoYtwo eyeCoordinate,
            LipRatio lipRatio,
            MouthSize mouthSize,
            XoneYoneXtwoYtwo mouthCoordinate,
            String faceImgUrl,
            Skin skin
            ){
        
        //얼굴 분석 결과 저장
        this.faceShape = faceShape;
        this.faceX1 = faceCoordinate.getX1();
        this.faceY1 = faceCoordinate.getY1();
        this.faceX2 = faceCoordinate.getX2();
        this.faceY2 = faceCoordinate.getY2();

        //눈 분석 결과 저장
        this.eyelidDirection = eyelidDirection;
        this.eyelidSize = eyelidSize;
        this.eyelidWidth = eyelidWidth;
        this.eyeX1 = eyeCoordinate.getX1();
        this.eyeY1 = eyeCoordinate.getY1();
        this.eyeX2 = eyeCoordinate.getX2();
        this.eyeY2 = eyeCoordinate.getY2();
        
        //코 분석 결과 저장
        this.noseSize = noseSize;
        this.alarSize = alarSize;
        this.noseX1 = noseCoordinate.getX1();
        this.noseY1 = noseCoordinate.getY1();
        this.noseX2 = noseCoordinate.getX2();
        this.noseY2 = noseCoordinate.getY2();

        //입 분석 결과
        this.mouthSize = mouthSize;
        this.lipRatio = lipRatio;
        this.lipX1 = mouthCoordinate.getX1();
        this.lipY1 = mouthCoordinate.getY1();
        this.lipX2 = mouthCoordinate.getX2();
        this.lipY2 = mouthCoordinate.getY2();
        
        //이미지 URL 저장
        this.analysisResultPhotoUrl = faceImgUrl;
        
        //스킨 분석결과 저장
        this.analysisResultPores = skin.getMole();
        this.analysisResultGlabellaWrinkle = skin.getGlabellaWrinkle();
        this.analysisResultForeheadWrinkle = skin.getForeheadWrinkle();
        this.analysisResultAcne = skin.getAcne();
        this.analysisResultDarkCircles = skin.getDarkCircle();
    }
}
