package com.sail.back.report.controller;

import com.sail.back.global.utils.MessageUtils;
import com.sail.back.report.model.dto.request.SaveAnalysisRequest;
import com.sail.back.report.model.service.AnalysisService;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/v1/analysis")
public class AnalysisController {
    private final AnalysisService analysisService;
    @PostMapping("/save/{consultingId}")
    public ResponseEntity<MessageUtils> saveAnalysis(
            @AuthenticationPrincipal User user,
            @RequestBody SaveAnalysisRequest request,
            @PathVariable Long consultingId
            ){
        analysisService.saveAnalysis(user, request, consultingId);
        return ResponseEntity.ok().body(MessageUtils.success());
    }

    @GetMapping("/find/{consultingId}")
    public ResponseEntity<MessageUtils> findAnalysis(
            @AuthenticationPrincipal User user,
            @PathVariable Long consultingId
    ){

        return ResponseEntity.ok().body(MessageUtils.success());
    }
}
