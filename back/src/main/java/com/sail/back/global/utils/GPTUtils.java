package com.sail.back.global.utils;

import com.sail.back.global.config.GptConfig;
import com.sail.back.report.exception.ReportErrorCode;
import com.sail.back.report.exception.ReportException;
import com.sail.back.report.model.dto.request.gpt.Message;
import com.sail.back.report.model.dto.request.gpt.SendGptRequest;
import com.sail.back.report.model.dto.response.gpt.GptResponse;
import com.sail.back.report.model.entity.enums.*;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class GPTUtils {
    private final GptConfig config;

    private Mono<GptResponse> generateText(String prompt) {
        log.info("key = ", config.getKey());
        return WebClient.builder()
                .baseUrl("https://api.openai.com/")
                .defaultHeader("Authorization", "Bearer "+config.getKey())
                .defaultHeader("Content-Type", "application/json")
                .build()
                .post()
                .uri("v1/chat/completions")
                .bodyValue(new SendGptRequest("gpt-4", List.of(new Message("user", prompt)), 0.7)) // 요청 바디
                .retrieve() //응답검색
                .bodyToMono(GptResponse.class); // 응답을 GptResponse 객체로 매핑
    }



    public String makeFaceContent(User user, FaceShape faceShape, SurveyType surveyType){
        log.info("얼굴 분석 컨텐츠 GPT 요청 시작");
        StringBuilder sendString = new StringBuilder();
        sendString
                .append("나에게 맞는 화장품과 피부, 화장법을 350자 이내로 추천해줘").append("\n")
                .append("생일 : " + user.getBirthdateYear() +"년 "+user.getBirthdateMonth()).append("\n")
                .append("성별 : " + user.getGender().name()).append("\n")
                .append("인종 : 한국인").append("\n")
                .append("이름 : " + user.getName()).append("\n")
                .append("바우만 피부 유형 검사 결과 : "+surveyType.name()).append("\n")
                .append("얼굴형 : "+ faceShape.name());
        log.info(sendString.toString());
        Mono<GptResponse> gptResponseMono = generateText(sendString.toString());
        log.info("얼굴 분석 컨텐츠 GPT 응답 완료");
        return gptResponseMono.map(gptResponse -> {
            if (gptResponse.getChoices() != null && !gptResponse.getChoices().isEmpty()) {
                String content = gptResponse.getChoices().get(0).getMessage().getContent();
                log.info("얼굴 분석 컨텐츠 ={}",content);
                return content;
            } else {
                log.error("[얼굴 분석 에러!!!]");
                throw new ReportException(ReportErrorCode.ANALYSIS_ERROR);
            }
        }).block();
    }

    public String makeNoseContent(User user, NoseSize noseSize, AlarSize alarSize){
        log.info("코 분석 컨텐츠 GPT 요청 시작");
        StringBuilder sendString = new StringBuilder();
        sendString
                .append("나에게 맞는 코에 대한 화장품 및 화장 법을 350자 이내로 추천해줘").append("\n")
                .append("생일 : " + user.getBirthdateYear() +"년 "+user.getBirthdateMonth()).append("\n")
                .append("성별 : " + user.getGender().name()).append("\n")
                .append("인종 : 한국인").append("\n")
                .append("이름 : " + user.getName()).append("\n")
                .append("코 크기 : "+ noseSize.name()).append("\n")
                .append("콧볼 크기 : "+ alarSize.name());
        Mono<GptResponse> gptResponseMono = generateText(sendString.toString());
        log.info("코 분석 컨텐츠 GPT 응답 완료");
        return gptResponseMono.map(gptResponse -> {
            if (gptResponse.getChoices() != null && !gptResponse.getChoices().isEmpty()) {
                String content = gptResponse.getChoices().get(0).getMessage().getContent();
                log.info("코 분석 컨텐츠 ={}",content);
                return content;
            } else {
                log.error("[코 분석 에러!!!]");
                throw new ReportException(ReportErrorCode.ANALYSIS_ERROR);
            }
        }).block();
    }

    public String makeEyeContent(User user, EyelidDirection eyelidDirection, EyelidWidth eyelidWidth, EyelidSize eyelidSize){
        log.info("눈 분석 컨텐츠 GPT 요청 시작");
        StringBuilder sendString = new StringBuilder();
        sendString
                .append("나에게 맞는 눈에 대한 화장품 및 화장 법을 350자 이내로 추천해줘").append("\n")
                .append("생일 : " + user.getBirthdateYear() +"년 "+user.getBirthdateMonth()).append("\n")
                .append("성별 : " + user.getGender().name()).append("\n")
                .append("인종 : 한국인").append("\n")
                .append("이름 : " + user.getName()).append("\n")
                .append("눈매 방향 : "+ eyelidDirection.name()).append("\n")
                .append("눈매 길이 : "+ eyelidWidth.name()).append("\n")
                .append("눈 크기 : "+ eyelidSize.name());
        Mono<GptResponse> gptResponseMono = generateText(sendString.toString());
        log.info("눈 분석 컨텐츠 GPT 응답 완료");
        return gptResponseMono.map(gptResponse -> {
            if (gptResponse.getChoices() != null && !gptResponse.getChoices().isEmpty()) {
                String content = gptResponse.getChoices().get(0).getMessage().getContent();
                log.info("눈 분석 컨텐츠 ={}",content);
                return content;
            } else {
                log.error("[눈 분석 에러!!!]");
                throw new ReportException(ReportErrorCode.ANALYSIS_ERROR);
            }
        }).block();
    }

    public String makeMouthContent(User user, LipRatio lipRatio, MouthSize mouthSize){
        log.info("입 분석 컨텐츠 GPT 요청 시작");
        StringBuilder sendString = new StringBuilder();
        sendString
                .append("나에게 맞는 입 및 입술에 대한 화장품 및 화장 법을 350자 이내로 추천해줘").append("\n")
                .append("생일 : " + user.getBirthdateYear() +"년 "+user.getBirthdateMonth()).append("\n")
                .append("성별 : " + user.getGender().name()).append("\n")
                .append("인종 : 한국인").append("\n")
                .append("이름 : " + user.getName()).append("\n")
                .append("입술 비율 : "+ lipRatio.name()).append("\n")
                .append("입 좌우 크기 : "+ mouthSize.name());
        Mono<GptResponse> gptResponseMono = generateText(sendString.toString());
        log.info("입 분석 컨텐츠 GPT 응답 완료");
        return gptResponseMono.map(gptResponse -> {
            if (gptResponse.getChoices() != null && !gptResponse.getChoices().isEmpty()) {
                String content = gptResponse.getChoices().get(0).getMessage().getContent();
                log.info("입 분석 컨텐츠 ={}",content);
                return content;
            } else {
                log.error("[입 분석 에러!!!]");
                throw new ReportException(ReportErrorCode.ANALYSIS_ERROR);
            }
        }).block();

    }

}
