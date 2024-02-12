package com.sail.back.career.controller;

import com.sail.back.career.model.dto.request.CareerCreateRequest;
import com.sail.back.career.model.dto.response.CareerResponse;
import com.sail.back.career.service.CareerService;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/careers")
@RequiredArgsConstructor
public class CareerController {

    private final CareerService careerService;

    @PostMapping("/create")
    public ResponseEntity<MessageUtils<CareerResponse>> createCareer(@RequestBody CareerCreateRequest request, @AuthenticationPrincipal User user) {
        CareerResponse careerResponse = careerService.createCareer(request,user);
        return ResponseEntity.ok(MessageUtils.success(careerResponse));
    }

    @DeleteMapping("/{careerId}")
    public ResponseEntity<MessageUtils> deleteCareer(@PathVariable Long careerId) {
        careerService.deleteCareer(careerId);
        return ResponseEntity.ok(MessageUtils.success());
    }

}
