package com.sail.back.consultant.controller;

import com.sail.back.consultant.model.dto.request.ConsultantUpdateRequest;
import com.sail.back.consultant.model.dto.response.ConsultantDetailResponse;
import com.sail.back.consultant.model.dto.response.ConsultantListResponse;
import com.sail.back.consultant.model.dto.response.ConsultantResponse;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consultant.model.service.ConsultantService;
import com.sail.back.consulting.model.dto.request.ConsultingmylistRequest;
import com.sail.back.consulting.model.dto.response.ConsultingmylistResponse;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/v1/consultant")
public class ConsultantController {

    private final ConsultantService consultantService;


    @GetMapping("/list")
    public ResponseEntity<MessageUtils<List<ConsultantListResponse>>> getConsultants() {
        List<ConsultantListResponse> responses = consultantService.getConsultants();

        log.info("컨설턴트 목록 조회 성공");
//        return ResponseEntity.ok()
//                .body(responses);
        return ResponseEntity.ok().body(MessageUtils.success(responses));


    }


    @GetMapping("/myinfo")
    public ResponseEntity<MessageUtils<ConsultantResponse>> getmyconsultantinfo(@AuthenticationPrincipal User user) {
        ConsultantResponse consultant = consultantService.getmyconsultantinfo(user);

        log.info("내 컨설턴트 정보 조회 성공");

        return ResponseEntity.ok().body(MessageUtils.success(consultant));

    }

    @GetMapping("/detail/{consultantid}")
    public ResponseEntity<MessageUtils<ConsultantDetailResponse>> getConsultant(@PathVariable Long consultantid) {
        ConsultantDetailResponse consultant = consultantService.getConsultant(consultantid);
        log.info("컨설턴트 상세 조회");
        return ResponseEntity.ok().body(MessageUtils.success(consultant));
    }

    @GetMapping("/mylist")
    public ResponseEntity<MessageUtils<List<ConsultingmylistResponse>>> getMyConsultingList(@AuthenticationPrincipal User user, @RequestParam LocalDateTime localDateTime) {
        List<ConsultingmylistResponse> consultingList = consultantService.getMyConsultingList(user, localDateTime);
        log.info("나의 컨설팅 목록 조회");
        return ResponseEntity.ok().body(MessageUtils.success(consultingList));
    }

    @GetMapping("/myAlllist")
    public ResponseEntity<MessageUtils<List<ConsultingmylistResponse>>> getAllMyConsultingList(@AuthenticationPrincipal User user) {
        List<ConsultingmylistResponse> consultingList = consultantService.getAllMyConsultingList(user);
        log.info("나의 모든 컨설팅 목록 조회");
        return ResponseEntity.ok().body(MessageUtils.success(consultingList));
    }


    @PutMapping("/update")
    public ResponseEntity<MessageUtils<ConsultantDetailResponse>> update(@AuthenticationPrincipal User user, @RequestBody ConsultantUpdateRequest consultantUpdateRequest) {
        ConsultantDetailResponse update = consultantService.update(user, consultantUpdateRequest);
        log.info("컨설턴트 정보 업데이트");
        return ResponseEntity.ok().body(MessageUtils.success(update));
    }

}
