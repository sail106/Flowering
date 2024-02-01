package com.sail.back.report.controller;

import com.sail.back.global.utils.MessageUtils;
import com.sail.back.report.model.dto.request.SaveExpertOpinionRequest;
import com.sail.back.report.model.service.ExpertOpinionService;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/v1/expert-opinion")
public class ExpertOpinionController {

    private final ExpertOpinionService expertOpinionService;

    @PostMapping("/save/{consultingId}")
    public ResponseEntity<MessageUtils> save(
            @AuthenticationPrincipal User user,
            @PathVariable Long consultingId,
            @RequestBody SaveExpertOpinionRequest request
            ){
        expertOpinionService.saveExpertOpinion(user, consultingId, request);
        return ResponseEntity.ok().body(MessageUtils.success());
    }
}
