package com.sail.back.report.model.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.sail.back.consulting.exception.ConsultingException;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.consulting.model.repository.ConsultingRepository;
import com.sail.back.global.utils.AnalysisUtils;
import com.sail.back.global.utils.analysis.Skin;
import com.sail.back.global.utils.analysis.XoneYoneXtwoYtwo;
import com.sail.back.report.exception.ReportErrorCode;
import com.sail.back.report.exception.ReportException;
import com.sail.back.report.model.dto.request.SaveAnalysisRequest;
import com.sail.back.report.model.dto.request.analysis.FaceLandMarkApiResult;
import com.sail.back.report.model.dto.request.analysis.landmark.face.FaceDto;
import com.sail.back.report.model.dto.request.analysis.landmark.leftEye.LeftEyeDto;
import com.sail.back.report.model.dto.request.analysis.landmark.leftEyeEyelid.LeftEyeEyelidDto;
import com.sail.back.report.model.dto.request.analysis.landmark.leftEyebrow.LeftEyebrowDto;
import com.sail.back.report.model.dto.request.analysis.landmark.mouth.MouthDto;
import com.sail.back.report.model.dto.request.analysis.landmark.nose.NoseDto;
import com.sail.back.report.model.dto.request.analysis.landmark.rightEye.RightEyeDto;
import com.sail.back.report.model.dto.request.analysis.landmark.rightEyeEyelid.RightEyeEyelidDto;
import com.sail.back.report.model.dto.request.analysis.landmark.rightEyebrow.RightEyebrowDto;
import com.sail.back.report.model.dto.response.AnalysisResponse;
import com.sail.back.report.model.entity.Report;
import com.sail.back.report.model.entity.enums.*;
import com.sail.back.report.model.repository.ReportRepository;
import com.sail.back.user.exception.UserErrorCode;
import com.sail.back.user.exception.UserException;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.sail.back.consulting.exception.ConsultingErrorCode.*;

@Service
@Slf4j
@RequiredArgsConstructor
public class AnalysisService {

    private final AnalysisUtils analysisUtils;
    private final ReportRepository reportRepository;
    private final ConsultingRepository consultingRepository;

    @Transactional
    public void saveAnalysis(User user, SaveAnalysisRequest request, Long consultingId){
        Consulting consulting = consultingRepository
                .findById(consultingId).orElseThrow(() -> new ConsultingException(NOT_EXISTS_CONSULTANT));
        if (consulting.getUser().getId()!=user.getId()) throw new UserException(UserErrorCode.ACCESS_DENIED);
        Report report = reportRepository
                .findByConsulting(consulting).orElseThrow(() -> new ReportException(ReportErrorCode.NOT_EXISTS));
        try {
            FaceLandMarkApiResult faceLandMarkApiResult = analysisUtils.sendAnalysisFaceApi(request.getFaceImgUrl());
            Skin skin = analysisUtils.sendAnalysisSkinApi(request.getFaceImgUrl());

            FaceDto face = faceLandMarkApiResult.getLandmarkDto().getFaceDto();
            NoseDto nose = faceLandMarkApiResult.getLandmarkDto().getNoseDto();
            MouthDto mouth = faceLandMarkApiResult.getLandmarkDto().getMouthDto();
            LeftEyeDto leftEye = faceLandMarkApiResult.getLandmarkDto().getLeftEyeDto();
            LeftEyeEyelidDto leftEyeEyelidDto = faceLandMarkApiResult.getLandmarkDto().getLeftEyeEyelidDto();
            LeftEyebrowDto leftEyebrow = faceLandMarkApiResult.getLandmarkDto().getLeftEyebrowDto();
            RightEyeDto rightEye = faceLandMarkApiResult.getLandmarkDto().getRightEyeDto();
            RightEyeEyelidDto rightEyeEyelidDto = faceLandMarkApiResult.getLandmarkDto().getRightEyeEyelidDto();
            RightEyebrowDto rightEyebrow = faceLandMarkApiResult.getLandmarkDto().getRightEyebrowDto();

            //얼굴
            FaceShape faceShape = analysisUtils.shapeTypeAnalyzer(face);
            XoneYoneXtwoYtwo faceCoordinate = analysisUtils.getFaceCoordinate(face);
            //코
            NoseSize noseSize = analysisUtils.noseSizeAnalyzer(leftEyeEyelidDto, rightEyeEyelidDto, nose);
            AlarSize alarSize = analysisUtils.alarSizeAnalyzer(nose);
            XoneYoneXtwoYtwo noseCoordinate = analysisUtils.getNoseCoordinate(nose);
            //눈
            EyelidDirection eyelidDirection = analysisUtils.eyeLidDirectionAnalyzer(leftEyeEyelidDto, rightEyeEyelidDto);
            EyelidWidth eyelidWidth = analysisUtils.eyelidWidthAnalyzer(leftEyeEyelidDto, rightEyeEyelidDto, face);
            EyelidSize eyelidSize = analysisUtils.eyeSizeAnalyzer(leftEyeEyelidDto, rightEyeEyelidDto, leftEyebrow, rightEyebrow);
            XoneYoneXtwoYtwo eyeCoordinate = analysisUtils.getEyeCoordinate(leftEyeEyelidDto, rightEyeEyelidDto);
            //입
            LipRatio lipRatio = analysisUtils.mouthRatioAnalyzer(mouth);
            MouthSize mouthSize = analysisUtils.mouthSizeAnalyzer(mouth, leftEye, rightEye);
            XoneYoneXtwoYtwo mouthCoordinate = analysisUtils.getMouthCoordinate(mouth);

            //entity에 세팅
            report.analysisSave(
                    faceShape,
                    faceCoordinate,
                    noseSize,
                    alarSize,
                    noseCoordinate,
                    eyelidDirection,
                    eyelidWidth,
                    eyelidSize,
                    eyeCoordinate,
                    lipRatio,
                    mouthSize,
                    mouthCoordinate,
                    request.getFaceImgUrl(),
                    skin);

            //저장
            reportRepository.save(report);
        } catch (JsonProcessingException e) {
            throw new ReportException(ReportErrorCode.NOT_EXISTS, e);
        }
    }

    @Transactional
    public AnalysisResponse findAnalysis(User user, Long consultingId){
        Consulting consulting = consultingRepository
                .findById(consultingId).orElseThrow(() -> new ConsultingException(NOT_EXISTS_CONSULTANT));
        if (consulting.getUser().getId()!=user.getId()) throw new UserException(UserErrorCode.ACCESS_DENIED);
        Report report = reportRepository
                .findByConsulting(consulting).orElseThrow(() -> new ReportException(ReportErrorCode.NOT_EXISTS));
        return report.toAnalysisResponse();
    }

}
