package com.sail.back.global.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sail.back.global.config.AnalysisConfig;
import com.sail.back.global.utils.analysis.*;
import com.sail.back.report.model.dto.request.analysis.CoordinateDto;
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
import com.sail.back.report.model.entity.enums.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class AnalysisUtils {
    private final AnalysisConfig analysisConfig;
    private final EyeAnalyzer eyeAnalyzer;
    private final FaceShapeAnalyzer faceShapeAnalyzer;
    private final MouthAnalyzer mouthAnalyzer;
    private final NoseAnalyzer noseAnalyzer;
    private final MakeListFromDto makeListFromDto;
    private final Calculator calculator;
    public FaceLandMarkApiResult sendAnalysisApi(String imageUrl) throws JsonProcessingException {
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("api_key", analysisConfig.getKey());
        params.add("api_secret", analysisConfig.getSecret());
        params.add("image_url", imageUrl);
        params.add("return_landmark", "all");

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders header = new HttpHeaders();
        header.setContentType(MediaType.MULTIPART_FORM_DATA);

        HttpEntity<?> requestEntity = new HttpEntity<>(params, header);

        UriComponents uri = UriComponentsBuilder.fromHttpUrl("https://api-us.faceplusplus.com/facepp/v1/face/thousandlandmark").build();

        ResponseEntity<String> resultMap = restTemplate.exchange(uri.toString(), HttpMethod.POST, requestEntity, String.class);


        ObjectMapper mapper = new ObjectMapper();
        JsonNode responseJsonNode = mapper.readTree(resultMap.getBody());
        JsonNode faceJsonNode = responseJsonNode.get("face");

        FaceLandMarkApiResult result = mapper.treeToValue(faceJsonNode, FaceLandMarkApiResult.class);
        return result;
    }

    @Transactional
    public EyelidDirection eyeLidDirectionAnalyzer(LeftEyeEyelidDto leftEyelid, RightEyeEyelidDto rightEyelid){
        ArrayList<CoordinateDto> leftEyelidList = makeListFromDto.leftEyeLidList(leftEyelid);
        ArrayList<CoordinateDto> rightEyelidList = makeListFromDto.rightEyeLidList(rightEyelid);
        return eyeAnalyzer.eyeShapeAnalyzer(leftEyelidList, rightEyelidList);
    }
    @Transactional
    public EyelidWidth eyelidWidthAnalyzer(LeftEyeEyelidDto leftEyelid, RightEyeEyelidDto rightEyelid, FaceDto face){
        ArrayList<CoordinateDto> faceContourRightList = makeListFromDto.faceContourRightList(face);
        ArrayList<CoordinateDto> faceContourLeftList = makeListFromDto.faceContourLeftList(face);
        ArrayList<CoordinateDto> leftEyelidList = makeListFromDto.leftEyeLidList(leftEyelid);
        ArrayList<CoordinateDto> rightEyelidList = makeListFromDto.rightEyeLidList(rightEyelid);

        return eyeAnalyzer.eyeWidthAnalyzer(leftEyelidList, rightEyelidList, faceContourLeftList, faceContourRightList);
    }

    @Transactional
    public EyelidSize eyeSizeAnalyzer(LeftEyeEyelidDto leftEyelid, RightEyeEyelidDto rightEyelid, LeftEyebrowDto leftEyebrow, RightEyebrowDto rightEyebrow){
        ArrayList<CoordinateDto> leftEyebrowList = makeListFromDto.leftEyebrowList(leftEyebrow);
        ArrayList<CoordinateDto> rightEyebrowList = makeListFromDto.rightEyebrowList(rightEyebrow);
        ArrayList<CoordinateDto> leftEyelidList = makeListFromDto.leftEyeLidList(leftEyelid);
        ArrayList<CoordinateDto> rightEyelidList = makeListFromDto.rightEyeLidList(rightEyelid);

        return eyeAnalyzer.eyeSizeAnalyzer(leftEyelidList, rightEyelidList, leftEyebrowList, rightEyebrowList);
    }

    @Transactional
    public NoseSize noseSizeAnalyzer(LeftEyeEyelidDto leftEyelid, RightEyeEyelidDto rightEyelid, NoseDto noseDto){
        ArrayList<CoordinateDto> noseLeftList = makeListFromDto.noseLeftList(noseDto);
        ArrayList<CoordinateDto> noseRightList = makeListFromDto.noseRightList(noseDto);
        ArrayList<CoordinateDto> leftEyelidList = makeListFromDto.leftEyeLidList(leftEyelid);
        ArrayList<CoordinateDto> rightEyelidList = makeListFromDto.rightEyeLidList(rightEyelid);

        return noseAnalyzer.noseSizeAnalyzer(noseLeftList, noseRightList, leftEyelidList.get(31), rightEyelidList.get(31));
    }

    @Transactional
    public AlarSize alarSizeAnalyzer(NoseDto noseDto){
        ArrayList<CoordinateDto> noseLeftList = makeListFromDto.noseLeftList(noseDto);
        ArrayList<CoordinateDto> noseRightList = makeListFromDto.noseRightList(noseDto);

        return noseAnalyzer.alarSizeAnalyzer(noseLeftList, noseRightList);
    }

    @Transactional
    public MouthSize mouthSizeAnalyzer(MouthDto mouth, LeftEyeDto leftEye, RightEyeDto rightEye){
        ArrayList<CoordinateDto> upperLipList = makeListFromDto.upperLipList(mouth);
        ArrayList<CoordinateDto> lowerLipList = makeListFromDto.lowerLipList(mouth);
        CoordinateDto leftEyePupilCenter = leftEye.getLeftEyePupilCenter();
        CoordinateDto rightEyePupilCenter = rightEye.getRightEyePupilCenter();

        int leftEyePupilRadius = leftEye.getLeftEyePupilRadius();
        int rightEyePupilRadius = rightEye.getRightEyePupilRadius();
        return mouthAnalyzer.mouthSizeAnalyzer(upperLipList, lowerLipList, leftEyePupilCenter, rightEyePupilCenter, leftEyePupilRadius, rightEyePupilRadius);
    }

    @Transactional
    public LipRatio mouthRatioAnalyzer(MouthDto mouth){
        ArrayList<CoordinateDto> upperLipList = makeListFromDto.upperLipList(mouth);
        ArrayList<CoordinateDto> lowerLipList = makeListFromDto.lowerLipList(mouth);

        return mouthAnalyzer.mouthRatioAnalyzer(upperLipList, lowerLipList);
    }

    @Transactional
    public FaceShape shapeTypeAnalyzer(FaceDto face){
        ArrayList<CoordinateDto> faceHairlineList = makeListFromDto.faceHairlineList(face);
        ArrayList<CoordinateDto> faceContourRightList = makeListFromDto.faceContourRightList(face);
        ArrayList<CoordinateDto> faceContourLeftList = makeListFromDto.faceContourLeftList(face);
        return faceShapeAnalyzer.shapeTypeAnalyzer(faceHairlineList, faceContourLeftList, faceContourRightList);
    }

    @Transactional
    public XoneYoneXtwoYtwo getEyeCoordinate(LeftEyeEyelidDto leftEyelid, RightEyeEyelidDto rightEyelid){
        ArrayList<CoordinateDto> leftEyelidList = makeListFromDto.leftEyeLidList(leftEyelid);
        ArrayList<CoordinateDto> rightEyelidList = makeListFromDto.rightEyeLidList(rightEyelid);
        return XoneYoneXtwoYtwo.builder()
                .x1(leftEyelidList.get(calculator.findMinimalX(leftEyelidList)).getX())
                .y1(leftEyelidList.get(calculator.findMinimalX(leftEyelidList)).getY())
                .x2(rightEyelidList.get(calculator.findMinimalX(rightEyelidList)).getX())
                .y2(rightEyelidList.get(calculator.findMaximalY(rightEyelidList)).getY())
                .build();
    }
    @Transactional
    public XoneYoneXtwoYtwo getNoseCoordinate(NoseDto noseDto){
        ArrayList<CoordinateDto> noseMidlineList = makeListFromDto.noseMidlineList(noseDto);
        ArrayList<CoordinateDto> noseLeftList = makeListFromDto.noseLeftList(noseDto);
        ArrayList<CoordinateDto> noseRightList = makeListFromDto.noseRightList(noseDto);
        return XoneYoneXtwoYtwo.builder()
                .x1(noseLeftList.get(calculator.findMinimalX(noseLeftList)).getX())
                .y1(noseMidlineList.get(calculator.findMinimalY(noseMidlineList)).getY())
                .x2(noseRightList.get(calculator.findMaximalX(noseRightList)).getX())
                .y2(noseMidlineList.get(calculator.findMaximalY(noseMidlineList)).getY())
                .build();
    }

    @Transactional
    public XoneYoneXtwoYtwo getMouthCoordinate(MouthDto mouth){
        ArrayList<CoordinateDto> upperLipList = makeListFromDto.upperLipList(mouth);
        ArrayList<CoordinateDto> lowerLipList = makeListFromDto.lowerLipList(mouth);
        return XoneYoneXtwoYtwo.builder()
                .x1(upperLipList.get(calculator.findMinimalX(upperLipList)).getX())
                .y1(upperLipList.get(calculator.findMinimalY(upperLipList)).getY())
                .x2(lowerLipList.get(calculator.findMaximalX(lowerLipList)).getX())
                .y2(lowerLipList.get(calculator.findMaximalY(lowerLipList)).getY())
                .build();
    }

    @Transactional
    public XoneYoneXtwoYtwo getMouthCoordinate(FaceDto face){
        ArrayList<CoordinateDto> faceHairlineList = makeListFromDto.faceHairlineList(face);
        ArrayList<CoordinateDto> faceContourRightList = makeListFromDto.faceContourRightList(face);
        return XoneYoneXtwoYtwo.builder()
                .x1(faceHairlineList.get(calculator.findMinimalX(faceHairlineList)).getX())
                .y1(faceHairlineList.get(calculator.findMinimalY(faceHairlineList)).getY())
                .x2(faceContourRightList.get(calculator.findMaximalX(faceContourRightList)).getX())
                .y2(faceContourRightList.get(calculator.findMaximalY(faceContourRightList)).getY())
                .build();
    }
}
