package com.sail.back.user.controller;

import com.sail.back.global.utils.MessageUtils;
import com.sail.back.user.model.dto.request.FindRequest;
import com.sail.back.user.model.dto.request.UserRegistRequest;
import com.sail.back.user.model.dto.request.UserUpdateRequest;
import com.sail.back.user.model.dto.response.MyConsultinglistResponse;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.AuthProvider;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;


@RestController
@RequestMapping("/v1/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserService userService;


    @PostMapping("/regist")
    public ResponseEntity<MessageUtils> register(@Valid @RequestBody UserRegistRequest userRegistRequest) {
        log.debug("UserRegistRequest={}", userRegistRequest.toString());
        userService.registUser(userRegistRequest, UserRole.USER, AuthProvider.GENERAL);
        return ResponseEntity.ok().body(MessageUtils.success());
    }

    @GetMapping("/info")
    public ResponseEntity<MessageUtils> info(@ModelAttribute FindRequest findRequest, @AuthenticationPrincipal User user) {
        return ResponseEntity.ok().body(MessageUtils.success(userService.infoUser(findRequest, user)));
    }

    @GetMapping("/myconsultinglist")
    public ResponseEntity<MessageUtils<List<MyConsultinglistResponse>>> myconsultinglist(@AuthenticationPrincipal User user, @RequestParam LocalDateTime localDateTime) {
        return ResponseEntity.ok().body(MessageUtils.success(userService.myconsultinglist(user.getId(), localDateTime)));
    }

    @GetMapping("/myallconsultinglist")
    public ResponseEntity<MessageUtils<List<MyConsultinglistResponse>>> myallconsultinglist(@AuthenticationPrincipal User user) {
       log.info("alllll"+user.getId());
        return ResponseEntity.ok().body(MessageUtils.success(userService.myallconsultinglist(user.getId())));
    }

    @DeleteMapping("/withdraw")
    public ResponseEntity<MessageUtils> delete(@AuthenticationPrincipal User user) {
        userService.withdrawUser(user);
        return ResponseEntity.ok().body(MessageUtils.success());
    }

    @PatchMapping("/update")
    public ResponseEntity<MessageUtils> update(@RequestBody UserUpdateRequest request, @AuthenticationPrincipal User user) {
        userService.updateUser(request, user);
        log.info("user"+user);
        return ResponseEntity.ok().body(MessageUtils.success());
    }

}
