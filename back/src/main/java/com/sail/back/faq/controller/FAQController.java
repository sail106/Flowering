package com.sail.back.faq.controller;

import com.sail.back.faq.model.dto.request.FAQAddRequest;
import com.sail.back.faq.model.service.FAQService;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/faq")
@RequiredArgsConstructor
@Slf4j
public class FAQController {

    private final FAQService faqService;

    @GetMapping("/list")
    public ResponseEntity<MessageUtils> findFAQList(){
        return ResponseEntity.ok(MessageUtils.success(faqService.findAll()));
    }

    @PostMapping("/add")
    public ResponseEntity<MessageUtils> addFAQ(
            @AuthenticationPrincipal User user,
            @RequestBody FAQAddRequest request
            ){
        faqService.addFAQ(user, request);
        return ResponseEntity.ok(MessageUtils.success());
    }

    @DeleteMapping("/delete/{faqId}")
    public ResponseEntity<MessageUtils> deleteFAQ(
            @AuthenticationPrincipal User user,
            @PathVariable Long faqId
    ){
        faqService.deleteFAQ(user, faqId);
        return ResponseEntity.ok(MessageUtils.success());
    }
}
