package com.sail.back.report.model.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.sail.back.global.utils.AnalysisUtils;
import com.sail.back.report.model.dto.request.analysis.FaceLandMarkApiResult;
import com.sail.back.report.model.dto.request.analysis.landmark.face.FaceDto;
import com.sail.back.report.model.dto.request.analysis.landmark.leftEye.LeftEyeDto;
import com.sail.back.report.model.dto.request.analysis.landmark.leftEyebrow.LeftEyebrowDto;
import com.sail.back.report.model.dto.request.analysis.landmark.mouth.MouthDto;
import com.sail.back.report.model.dto.request.analysis.landmark.nose.NoseDto;
import com.sail.back.report.model.dto.request.analysis.landmark.rightEye.RightEyeDto;
import com.sail.back.report.model.dto.request.analysis.landmark.rightEyebrow.RightEyebrowDto;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class AnalysisService {

    private final AnalysisUtils analysisUtils;


    @Transactional
    public void saveAnalysis(User user, String analysisImageUrl){
        try {
            FaceLandMarkApiResult faceLandMarkApiResult = analysisUtils.sendAnalysisApi(analysisImageUrl);

            FaceDto face = faceLandMarkApiResult.getLandmarkDto().getFaceDto();
            NoseDto nose = faceLandMarkApiResult.getLandmarkDto().getNoseDto();
            MouthDto mouth = faceLandMarkApiResult.getLandmarkDto().getMouthDto();
            LeftEyeDto leftEye = faceLandMarkApiResult.getLandmarkDto().getLeftEyeDto();
            LeftEyebrowDto leftEyebrow = faceLandMarkApiResult.getLandmarkDto().getLeftEyebrowDto();
            RightEyeDto rightEye = faceLandMarkApiResult.getLandmarkDto().getRightEyeDto();
            RightEyebrowDto rightEyebrow = faceLandMarkApiResult.getLandmarkDto().getRightEyebrowDto();

            

        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
