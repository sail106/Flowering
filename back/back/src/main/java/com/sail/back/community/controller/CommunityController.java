package com.sail.back.community.controller;

import com.sail.back.community.model.dto.request.CommunityAddRequest;
import com.sail.back.community.model.dto.request.CommunityEditRequest;
import com.sail.back.community.model.entity.enums.CommunityStatus;
import com.sail.back.community.model.service.CommunityService;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;


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
        log.error(request.toString());
        communityService.addCommunity(request, user);
        return ResponseEntity.ok().body(MessageUtils.success());
    }

    @DeleteMapping("/delete/{communityId}")
    public ResponseEntity<MessageUtils> deleteCommunity(
            @AuthenticationPrincipal User user,
            @PathVariable Long communityId
    ){
        communityService.deleteCommunity(communityId, user);
        return ResponseEntity.ok().body(MessageUtils.success());
    }

    @PatchMapping("/edit")
    public ResponseEntity<MessageUtils> editCommunity(
            @AuthenticationPrincipal User user,
            @RequestBody CommunityEditRequest request
            ){
        communityService.editCommunity(request,user);
        return ResponseEntity.ok().body(MessageUtils.success());
    }

    @PatchMapping("/status/active/{communityId}")
    public ResponseEntity<MessageUtils> activeStatusCommunity(
            @AuthenticationPrincipal User user,
            @PathVariable Long communityId
    ){
        communityService.editStatusCommunity(communityId, CommunityStatus.ACTIVE, user);
        return ResponseEntity.ok().body(MessageUtils.success());
    }

    @PatchMapping("/status/post-active/{communityId}")
    public ResponseEntity<MessageUtils> postActiveStatusCommunity(
            @AuthenticationPrincipal User user,
            @PathVariable Long communityId
    ){
        communityService.editStatusCommunity(communityId, CommunityStatus.POST_ACTIVE, user);
        return ResponseEntity.ok().body(MessageUtils.success());
    }

    @GetMapping("/findlist")
    public ResponseEntity<MessageUtils> findCommunityList(
            @AuthenticationPrincipal User user
    ){
        return ResponseEntity.ok()
                .body(MessageUtils.success(communityService.getCommunitiesListWithReservationStatus(user)));
    }

    @GetMapping("/findmylist")
    public ResponseEntity<MessageUtils> findMyCommunityList(
            @AuthenticationPrincipal User user
    ){
        return ResponseEntity.ok()
                .body(MessageUtils.success(communityService.getMyCreateCommunityList(user)));
    }

}
