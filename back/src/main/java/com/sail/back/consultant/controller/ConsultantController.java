package com.sail.back.consultant.controller;

import com.sail.back.consultant.model.dto.request.ConsultantUpdateRequest;
import com.sail.back.consultant.model.dto.response.ConsultantDetailResponse;
import com.sail.back.consultant.model.dto.response.ConsultantListResponse;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consultant.model.service.ConsultantService;
import com.sail.back.consulting.model.dto.request.ConsultingmylistRequest;
import com.sail.back.consulting.model.dto.response.ConsultingmylistResponse;
import com.sail.back.consulting.model.entity.Consulting;
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
    public ResponseEntity<List<ConsultantListResponse>> getConsultants() {
        List<ConsultantListResponse> responses = consultantService.getConsultants();

        log.info("컨설턴트 목록 조회 성공");
        return ResponseEntity.ok()
                .body(responses);
    }

    @GetMapping("/detail/{consultantid}")
    public ResponseEntity<ConsultantDetailResponse> getConsultant(@PathVariable Long consultantid) {

        ConsultantDetailResponse consultant = consultantService.getConsultant(consultantid);

        log.info("컨설턴트 상세 조회  ");

        return ResponseEntity.ok()
                .body(consultant);

    }

    @GetMapping("/mylist")
    public ResponseEntity<List<ConsultingmylistResponse>> getMyConsultingList(@AuthenticationPrincipal User user, @RequestParam LocalDateTime localDateTime
    ) {
        List<ConsultingmylistResponse> consultingList = consultantService.getMyConsultingList(user.getId(), localDateTime);
        System.out.println("mylisttttt" + consultingList.size());

//        List<ConsultingmylistResponse> responseList = consultingList.stream()
//                .map(ConsultingmylistResponse::fromEntity)
//                .collect(Collectors.toList());

        return ResponseEntity.ok(consultingList);
    }


    @PutMapping("/update")
    public ResponseEntity<ConsultantDetailResponse> update(@AuthenticationPrincipal User user, @RequestBody ConsultantUpdateRequest consultantUpdateRequest
     ) {
         ConsultantDetailResponse update = consultantService.update(user, consultantUpdateRequest);

        return ResponseEntity.ok(update);
    }

}
