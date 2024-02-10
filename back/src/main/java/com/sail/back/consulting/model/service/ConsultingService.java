package com.sail.back.consulting.model.service;

import com.sail.back.consultant.model.entity.*;
import com.sail.back.consultant.model.repository.ConsultantRepository;
import com.sail.back.consulting.exception.ConsultingErrorCode;
import com.sail.back.consulting.exception.ConsultingException;
import com.sail.back.consulting.model.dto.request.ConsultingCreateRequest;
import com.sail.back.consulting.model.dto.request.ConsultingUpdateRequest;
import com.sail.back.consulting.model.dto.response.ConsultingCreateResponse;
import com.sail.back.consulting.model.dto.response.ConsultingResponse;
import com.sail.back.consulting.model.entity.Consulting;
//import com.sail.back.consulting.model.repository.ConsultingRepository;
import com.sail.back.consulting.model.repository.ConsultingRepository;
import com.sail.back.global.exception.base.*;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class ConsultingService {

    private static final String CUSTOMER_NOT_FOUND = "해당 고객을 찾을 수 없습니다.";
    private static final String CONSULTANT_NOT_FOUND = "해당 컨설턴트를 찾을 수 없습니다.";
    private static final String RESERVATION_NOT_FOUND = "해당 예약을 찾을 수 없습니다.";
    private static final String WRONG_ACCESS = "잘못된 접근입니다.";
    private static final String RESERVATION_DELETED = "이미 취소된 예약입니다.";
    private static final String RESERVATION_DUPLICATED = "해당 시간에 이미 예약이 존재합니다.";

    private final UserRepository userRepository;
    private final ConsultantRepository consultantRepository;
    private final ConsultingRepository consultingRepository;

    public ConsultingCreateResponse createReservation(String role, Long userId, Long consultantId, ConsultingCreateRequest consultingCreateRequest) {

        if (UserRole.CONSULTANT.equals(role)) {
            throw new ConsultingException(ConsultingErrorCode.IS_CONSULTANT);

        }


        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundException(CUSTOMER_NOT_FOUND));

        Consultant consultant = consultantRepository.findById(consultantId)
                .orElseThrow(() -> new NotFoundException(CONSULTANT_NOT_FOUND));

        List<Consulting> consultingList = consultingRepository.
                findAllByUserIdAndTime(userId, consultingCreateRequest.getTime()).orElseThrow(() -> new ConsultingException(ConsultingErrorCode.NOT_EXISTS_CONSULTING));

        if (consultingList.size()>0) {
            throw new ConsultingException(ConsultingErrorCode.ALREADY_IN);
        }

        Consulting consulting = consultingCreateRequest.toEntity();

        consulting.create(user, consultant);

        consultingRepository.save(consulting);

        return ConsultingCreateResponse.builder()
                .time(consultingCreateRequest.getTime())
                .title(consultingCreateRequest.getTitle())
                .build();
    }


    @Transactional
    public MessageUtils deleteReservation(Long customerId, Long reservationId) {

        Consulting reservation = consultingRepository.findById(reservationId)
                .orElseThrow(() -> new NotFoundException(RESERVATION_NOT_FOUND));

        User user = userRepository.findById(customerId)
                .orElseThrow(() -> new NotFoundException(CUSTOMER_NOT_FOUND));

        if (!user.equals(reservation.getUser())) {
            throw new WrongAccessException(WRONG_ACCESS);
        }

        consultingRepository.delete(reservation);

        return MessageUtils.success(reservation, "200", "success");
    }

    public ConsultingResponse getReservation(Long consultingId) {
        Consulting consulting = consultingRepository.findById(consultingId).orElseThrow(() -> new ConsultingException(ConsultingErrorCode.NOT_EXISTS_CONSULTING));
        ConsultingResponse consultingResponse = consulting.toResponse();
        return consultingResponse;
    }

//    public List<User> getReservationcustomers(Long consultantid) {
//        List<Consulting> reservations = consultingRepository.
//                findAllByUserId(consultantid).orElseThrow(() -> new NotFoundException(RESERVATION_NOT_FOUND));
//        List<User> customers = reservations.stream().
//                map(Consulting::getUser)
//                .sorted(Comparator.comparing(User::getCreateAt).reversed())
//                .collect(Collectors.toList());
//
//        return customers;
//    }
//
//    public List<Consulting> getcustomerreservations(Long userid) {
//        List<Consulting> consultings = consultingRepository.
//                findAllByUserId(userid).orElseThrow(() -> new NotFoundException(RESERVATION_NOT_FOUND));
//
//        consultings.stream()
//                .sorted(Comparator.comparing(Consulting::getTime).reversed());
//
//        return consultings;
//    }
//
//
//    public ResponseEntity<MessageUtils> updateconsulting(Long consultingid, ConsultingUpdateRequest consultingUpdateRequest) {
//        Consulting consulting = consultingRepository.
//                findById(consultingid).orElseThrow(() -> new NotFoundException("컨설팅 정보가없습니다"));
//
//        consultingRepository.save(consulting);
//
//        return ResponseEntity.ok(MessageUtils.success());
//    }

}
