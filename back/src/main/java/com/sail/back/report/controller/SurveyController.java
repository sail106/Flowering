package com.sail.back.report.controller;

import com.sail.back.global.utils.MessageUtils;
import com.sail.back.report.model.dto.request.SaveSurveyRequest;
import com.sail.back.report.model.entity.enums.SurveyType;
import com.sail.back.report.model.service.SurveyService;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/v1/survey")
public class SurveyController {
    private final SurveyService surveyService;
    @PostMapping("/save/{consultingId}")
    public ResponseEntity<MessageUtils> addSurvey(
            @AuthenticationPrincipal User user,
            @PathVariable Long consultingId,
            @RequestBody SaveSurveyRequest request
            ){
        surveyService.saveSurvey(user,request,consultingId);
        return ResponseEntity.ok().body(MessageUtils.success());
    }

    @GetMapping("/find/{consultingId}")
    public ResponseEntity<MessageUtils> findReport(
            @AuthenticationPrincipal User user,
            @PathVariable Long consultingId
    ){
        return
    }
}
