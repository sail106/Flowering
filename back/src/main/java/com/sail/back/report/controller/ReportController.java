package com.sail.back.report.controller;

import com.sail.back.global.utils.MessageUtils;
import com.sail.back.report.model.entity.enums.SurveyType;
import com.sail.back.report.model.service.ReportService;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/v1/report")
public class ReportController {
    private final ReportService reportService;
    @PostMapping("/create/{consultingId}")
    public ResponseEntity<MessageUtils> createReport(
            @AuthenticationPrincipal User user,
            @PathVariable Long consultingId
    ){
        reportService.createReport(consultingId, user);
        return ResponseEntity.ok().body(MessageUtils.success());
    }
    @GetMapping("/find/{consultingId}")
    public ResponseEntity<MessageUtils> findReport(
            @AuthenticationPrincipal User user,
            @PathVariable Long consultingId
    ){
        return ResponseEntity.ok().body(MessageUtils.success(reportService.findReport(consultingId, user)));
    }

}
