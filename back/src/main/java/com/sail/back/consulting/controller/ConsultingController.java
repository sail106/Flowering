package com.sail.back.consulting.controller;

import com.sail.back.consulting.exception.ConsultingErrorCode;
import com.sail.back.consulting.exception.ConsultingException;
import com.sail.back.consulting.model.dto.request.ConsultingCreateRequest;
import com.sail.back.consulting.model.dto.response.ConsultingCreateResponse;
import com.sail.back.consulting.model.dto.response.ConsultingResponse;
import com.sail.back.consulting.model.service.ConsultingService;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.UserRole;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/v1/consultings")
//@CrossOrigin("*")
public class ConsultingController {

    //컨설턴트 선택 -> 예약페이지(오늘 날짜부터 현재달의 마지막날까지의 해당 컨설터
    //턴트의 예약 내역 ) >   시간들이 나오게 됨.  >  예약현황 나오고 ->


    private final ConsultingService consultingService;

    //상담예약등록
    @PostMapping("/create/{consultantId}")
    public ResponseEntity<MessageUtils> createReservation(
            @PathVariable Long consultantId,
            @AuthenticationPrincipal User user,
            @RequestBody ConsultingCreateRequest reservationCreateRequest) {

//        log.info("예약 등록 요청: 사용자 ID - {}, 컨설턴트 ID - {}", user.getId(), consultantId);

        UserRole userRole = user.getRole();
//
//        if (userRole.equals(UserRole.CONSULTANT)) {
//            throw new ConsultingException(ConsultingErrorCode.IS_CONSULTANT);
//        }


        Long customerId = user.getId();
        ConsultingResponse response = consultingService.createReservation(String.valueOf(userRole), customerId, consultantId, reservationCreateRequest);

        log.info("예약 등록 성공");
        return ResponseEntity.ok().body(MessageUtils.success(response));
    }


    @DeleteMapping("/{consultingId}")
    public ResponseEntity<MessageUtils> deleteReservation(@AuthenticationPrincipal User user,
                                                          @PathVariable Long consultingId) {

        MessageUtils message = consultingService.deleteReservation(user.getId(), consultingId);
        log.info("예약 삭제 성공");
        return ResponseEntity.ok()
                .body(message);

    }


    @PutMapping("/{consultingId}")
    public ResponseEntity<MessageUtils> modifyReservation(
            @PathVariable Long consultingId, LocalDateTime time) {
        MessageUtils message = consultingService.modifyReservation(consultingId, time);
        log.info("예약 변경 성공");
        return ResponseEntity.ok()
                .body(message);
    }

    @PutMapping("/activate/{consultingId}")
    public ResponseEntity<MessageUtils> activateReservation(@AuthenticationPrincipal User user,
                                                            @PathVariable Long consultingId) {

        MessageUtils message = consultingService.activateReservation(user, consultingId);
        log.info("예약 활성화 성공");
        return ResponseEntity.ok()
                .body(message);
    }

    @PutMapping("/deactivate/{consultingId}")
    public ResponseEntity<MessageUtils> deactivateReservation(@AuthenticationPrincipal User user,
                                                              @PathVariable Long consultingId) {

        MessageUtils message = consultingService.deactivateReservation(user, consultingId);
        log.info("예약 비활성화 성공");
        return ResponseEntity.ok()
                .body(message);
    }


    @GetMapping("/{consultingId}")
    public ResponseEntity<MessageUtils<ConsultingResponse>> getReservation(
            @PathVariable Long consultingId) {

        ConsultingResponse consultingResponse = consultingService.getReservation(consultingId);
        log.info("컨설팅 번호의 정보 가져오기");
        return ResponseEntity.ok()
                .body(MessageUtils.success(consultingResponse));

    }

//
//    //customer, consultant 자신의 예약내역조회
//    @GetMapping("/getreservations")
//    public ResponseEntity<List<Consulting>> getreservations(@AuthenticationPrincipal User user) {
//        List<Consulting> consultings = consultingService.getcustomerreservations(user.getId());
//        log.info(" 본인 의 예약내역 조회 성공");
//        return ResponseEntity.ok(consultings);
//    }
//
//    @GetMapping("/{consultantid}/getnames")
//    public ResponseEntity<List<User>> getReservationcustomers(
//            @PathVariable Long consultantid) {
//        List<User> customers = consultingService.getReservationcustomers(consultantid);
//        log.info("예약자 조회 성공");
//        return ResponseEntity.ok().body(customers);
//    }
//
//
//    //상담 업데이트
//    @PutMapping("/{consultingid}")
//    public ResponseEntity<MessageUtils> afterconsulting(
//            @PathVariable Long consultingid, ConsultingUpdateRequest consultingUpdateRequest) {
//
//        log.info("상담후 업데이트 ");
//        return consultingService.updateconsulting(consultingid, consultingUpdateRequest);
//    }


}
