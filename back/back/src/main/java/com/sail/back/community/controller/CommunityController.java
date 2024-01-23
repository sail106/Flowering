package com.sail.back.community.controller;

import com.sail.back.community.model.dto.request.CommunityAddRequest;
import com.sail.back.community.model.service.CommunityService;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/v1/community")
public class CommunityController {

    private final CommunityService communityService;
    @PostMapping("/add")
    public ResponseEntity<MessageUtils> addCommunity(
            @AuthenticationPrincipal User user,
            @RequestBody CommunityAddRequest request
            ){
        communityService.addCommunity(request, user);
        return ResponseEntity.ok().body(MessageUtils.success());
    }
}
