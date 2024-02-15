package com.sail.back.contents.controller;

import com.sail.back.contents.model.dto.request.ContentsAddRequest;
import com.sail.back.contents.model.dto.request.ContentsUpdateRequest;
import com.sail.back.contents.model.service.ContentsService;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.user.model.entity.User;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/contents")
@RequiredArgsConstructor
@Slf4j
public class ContentsController {

    private final ContentsService contentsService;

    @GetMapping("/list")
    public ResponseEntity<MessageUtils> findContentsList(){
        return ResponseEntity.ok(MessageUtils.success(contentsService.findAll()));
    }

    @PostMapping("/add")
    public ResponseEntity<MessageUtils> addContents(
            @AuthenticationPrincipal User user,
            @RequestBody ContentsAddRequest request
    ){
        System.out.println(request.getCategory());
        contentsService.addContents(user, request);

        return ResponseEntity.ok(MessageUtils.success());
    }

    @DeleteMapping("/{contentsId}")
    public ResponseEntity<MessageUtils> deleteContents(
            @AuthenticationPrincipal User user,
            @PathVariable Long contentsId
    ){
        contentsService.deleteContents(user, contentsId);
        return ResponseEntity.ok(MessageUtils.success());
    }

    @GetMapping("/{contentsId}")
    public ResponseEntity<MessageUtils> findOneContents(
            @PathVariable Long contentsId
    ) {
        return ResponseEntity.ok(MessageUtils.success(contentsService.findOne(contentsId)));
    }

    @PutMapping("/{contentsId}")
    public ResponseEntity<MessageUtils> updateContents(
            @AuthenticationPrincipal User user,
            @PathVariable Long contentsId,
            @RequestBody @Valid ContentsUpdateRequest request
    ) {
        contentsService.updateContents(user, contentsId, request);
        return ResponseEntity.ok(MessageUtils.success());
    }
}
