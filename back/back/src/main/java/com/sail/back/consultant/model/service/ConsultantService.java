package com.sail.back.consultant.model.service;

import com.sail.back.consultant.exception.ConsultantErrorCode;
import com.sail.back.consultant.exception.ConsultantException;
import com.sail.back.consultant.model.dto.request.ConsultantUpdateRequest;
import com.sail.back.consultant.model.dto.response.ConsultantDetailResponse;
import com.sail.back.consultant.model.dto.response.ConsultantListResponse;
import com.sail.back.consultant.model.dto.request.ConsultantSignupRequest;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consultant.model.repository.ConsultantRepository;
import com.sail.back.consulting.model.dto.request.ConsultingmylistRequest;
import com.sail.back.consulting.model.dto.response.ConsultingmylistResponse;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.consulting.model.repository.ConsultingRepository;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.UserRole;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Slf4j
@Service
public class ConsultantService {


    private final ConsultantRepository consultantRepository;
    private final ConsultingRepository consultingRepository;


    public List<ConsultantListResponse> getConsultants() {

        List<Consultant> consultants = consultantRepository.findAll();
        List<ConsultantListResponse> consultantListResponses = new ArrayList<>();

        for (Consultant consultant : consultants) {
            ConsultantListResponse consultantListResponse =
                    consultant.from(consultant);

            consultantListResponses.add(consultantListResponse);
        }

        return consultantListResponses;
    }


    public List<Consulting> getMyConsultingList(Long consultantId, LocalDateTime localDateTime) {

        Consultant consultant = consultantRepository.findById(consultantId).orElseThrow(() -> new ConsultantException(ConsultantErrorCode.NOT_EXISTS_CONSULTANT));


        List<Consulting> consultings = consultingRepository.findAllByConsultantAndTime(consultant, localDateTime).orElseThrow(() -> new ConsultantException(ConsultantErrorCode.NOT_EXISTS_TIME));
//        List<ConsultingmylistResponse> consultingmylistResponses = consultings.stream().
//                map(ConsultingmylistResponse::fromEntity ).collect(Collectors.toList());

        System.out.println("본인 상담내역조회" + consultings.toString());

//        for (Consulting consulting : consultings) {
//            consultingmylistResponses.add(ConsultingmylistResponse.fromEntity(consulting));
//        }

        return consultings;
    }

    public ConsultantDetailResponse getConsultant(Long consultantid) {
        Consultant consultant = consultantRepository.findById(consultantid).orElseThrow(() -> new ConsultantException(ConsultantErrorCode.NOT_EXISTS_CONSULTANT));
        return new ConsultantDetailResponse(consultant);
//        return ConsultantDetailResponse.builder()
//                .consultant_id(consultant.getConsultant_id())
//                .self_introduce(consultant.getSelf_introduce())
//                .user(consultant.getUser())
//                .build();
    }

    public ConsultantDetailResponse update(User user, ConsultantUpdateRequest consultantUpdateRequest) {
        Consultant consultant = consultantRepository.findById(user.getId()).orElseThrow(() -> new ConsultantException(ConsultantErrorCode.NOT_EXISTS_CONSULTANT));
        if (!UserRole.CONSULTANT.equals(user.getRole())) {
            throw new ConsultantException(ConsultantErrorCode.NOT_CONSULTANT);
        }

        consultant.update(user, consultantUpdateRequest.getSelf_introduce());

        consultantRepository.save(consultant);

        return consultant.toConsultantDetailResponse();
    }

}

