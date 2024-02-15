package com.sail.back.user.controller;

import com.sail.back.consulting.model.dto.response.ConsultingIsActiveResponse;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.consulting.model.service.ConsultingService;
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

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/v1/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserService userService;
    private final ConsultingService consultingService;


    // 컨설턴트 입장에서 이시간에 에약이 없어야하고 유저 입장에서도 본인 예약이 없어야 한다.
    @GetMapping("/{consultantid}/getreservation")
    public ResponseEntity<MessageUtils<List<ConsultingIsActiveResponse>>> getReservationbydate(@AuthenticationPrincipal User user,
                                                                                               LocalDate date, @PathVariable Long consultantid) {

        List<Consulting> consultings = consultingService.getReservationbydate(date);

        System.out.println(consultings.get(0).getConsulting_id());
        System.out.println(consultings.get(0).getUser().getId());

        List<ConsultingIsActiveResponse> result = new ArrayList<>();
//true 는 사용가능 , false 는 비활성화.
        result.add(new ConsultingIsActiveResponse(LocalTime.parse("10:00:00"), true));
        result.add(new ConsultingIsActiveResponse(LocalTime.parse("11:00:00"), true));
        result.add(new ConsultingIsActiveResponse(LocalTime.parse("12:00:00"), true));
        result.add(new ConsultingIsActiveResponse(LocalTime.parse("13:00:00"), true));
        result.add(new ConsultingIsActiveResponse(LocalTime.parse("14:00:00"), true));
        result.add(new ConsultingIsActiveResponse(LocalTime.parse("15:00:00"), true));
        result.add(new ConsultingIsActiveResponse(LocalTime.parse("16:00:00"), true));
        result.add(new ConsultingIsActiveResponse(LocalTime.parse("17:00:00"), true));
        result.add(new ConsultingIsActiveResponse(LocalTime.parse("18:00:00"), true));

        result.forEach(response -> {
            for (Consulting consulting : consultings) {
                if ((user.getId() == consulting.getUser().getId() || consulting.getConsultant().getConsultant_id() == consultantid) && consulting.getTime().equals(response.getTime())) {
                    response.setActive(false);
                }
            }
        });

        log.info("컨설팅 정보 유무 조회");

        return ResponseEntity.ok()
                .body(MessageUtils.success(result));
    }

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
        log.info("alllll" + user.getId());
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
        log.info("user" + user);
        return ResponseEntity.ok().body(MessageUtils.success());
    }

}
