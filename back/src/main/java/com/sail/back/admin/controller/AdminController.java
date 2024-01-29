package com.sail.back.admin.controller;

import com.sail.back.admin.model.dto.request.UserToConsultantRequest;
import com.sail.back.admin.model.service.AdminService;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.user.model.dto.request.UserRegistRequest;
import com.sail.back.user.model.entity.enums.AuthProvider;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/admin")
@RequiredArgsConstructor
@Slf4j
public class AdminController {
    private final AdminService adminService;

    @PutMapping("/toconsultant")
    public ResponseEntity<MessageUtils> toconsultant(@RequestBody UserToConsultantRequest userToConsultantRequest) {
        System.out.println("toconsult admincontrollerrr"+userToConsultantRequest.getId());
        adminService.toConsultant(userToConsultantRequest);
        return ResponseEntity.ok().body(MessageUtils.success());
    }


}
