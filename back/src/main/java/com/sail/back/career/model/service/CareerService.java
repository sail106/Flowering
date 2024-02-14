package com.sail.back.career.service;

import com.sail.back.career.exception.CareerErrorCode;
import com.sail.back.career.exception.CareerException;
import com.sail.back.career.model.dto.request.CareerCreateRequest;
import com.sail.back.career.model.dto.response.CareerResponse;
import com.sail.back.career.model.entity.Career;
import com.sail.back.career.model.repository.CareerRepository;
import com.sail.back.consultant.exception.ConsultantErrorCode;
import com.sail.back.consultant.exception.ConsultantException;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consultant.model.repository.ConsultantRepository;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CareerService {

    private final CareerRepository careerRepository;
    private final ConsultantRepository consultantRepository;

    public CareerResponse createCareer(CareerCreateRequest request, User user) {
        Consultant consultant = consultantRepository.findByUser(user).orElseThrow(() -> new ConsultantException(ConsultantErrorCode.NOT_EXISTS_CONSULTANT));

        Career career = request.toEntity(consultant);
        consultant.addcareers(career);

        careerRepository.save(career);
        return CareerResponse.from(career);
    }

    public void deleteCareer(Long careerId) {
        Career career = careerRepository.findById(careerId)
                .orElseThrow(() -> new CareerException(CareerErrorCode.NOT_EXISTS_Career));

        careerRepository.delete(career);
    }

}
