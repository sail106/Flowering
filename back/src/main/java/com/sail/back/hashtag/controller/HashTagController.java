package com.sail.back.hashtag.controller;

import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.hashtag.model.dto.request.HashTagCreateRequest;
import com.sail.back.hashtag.model.dto.response.HashTagResponse;
import com.sail.back.hashtag.model.entity.HashTag;
import com.sail.back.hashtag.model.repository.HashTagRepository;
import com.sail.back.hashtag.model.service.HashTagService;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/hashtags")
public class HashTagController {

    private final HashTagService hashTagService;

    @PostMapping("/create")
    public ResponseEntity<MessageUtils<HashTag>> createHashTag(@RequestBody HashTagCreateRequest hashtag, @AuthenticationPrincipal User user) {

        HashTag createdHashTag = hashTagService.createHashTag(hashtag, user);

        return ResponseEntity.ok(MessageUtils.success(createdHashTag));

    }


//
//    @GetMapping
//    public ResponseEntity<MessageUtils<HashTagResponse>> getHashTagByconsultantId(@AuthenticationPrincipal User user) {
//
//        List<HashTag> hashtag = hashTagService.getHashTagByuserId(user.getId());
//
//
//    }

//    @PutMapping("/{id}")
//    public ResponseEntity<MessageUtils<HashTagResponse>> updateHashTag(@AuthenticationPrincipal User user
//            , @RequestBody HashTagRequest hashTagRequest) {
//
//        HashTag updatedHashTag = hashTagService.updateHashTag(user, hashTagRequest);
//
//        HashTagResponse hashTagResponse=updatedHashTag.from(updatedHashTag);
//
//        return ResponseEntity.ok(MessageUtils.success(hashTagResponse));
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageUtils> deleteHashTag(@PathVariable("id") Long id, @AuthenticationPrincipal User user) {

        hashTagService.deleteHashTag(user,id);

        return ResponseEntity.ok(MessageUtils.success());
    }


}
