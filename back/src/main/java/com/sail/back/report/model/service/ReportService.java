package com.sail.back.report.model.service;

import com.sail.back.consultant.model.repository.ConsultantRepository;
import com.sail.back.consulting.exception.ConsultingException;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.consulting.model.repository.ConsultingRepository;
import com.sail.back.report.exception.ReportErrorCode;
import com.sail.back.report.exception.ReportException;
import com.sail.back.report.model.dto.response.ReportResponse;
import com.sail.back.report.model.entity.Report;
import com.sail.back.report.model.repository.ReportRepository;
import com.sail.back.user.exception.UserErrorCode;
import com.sail.back.user.exception.UserException;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import static com.sail.back.consulting.exception.ConsultingErrorCode.NOT_EXISTS_CONSULTANT;
import static com.sail.back.report.exception.ReportErrorCode.*;

@Service
@Slf4j
@RequiredArgsConstructor
public class ReportService {

    private final ReportRepository reportRepository;
    private final ConsultingRepository consultingRepository;

    public void createReport(Long consultingId, User user){
        Consulting consulting = consultingRepository
                .findById(consultingId).orElseThrow(()->new ConsultingException(NOT_EXISTS_CONSULTANT));
        if (consulting.getUser().getId()!=user.getId()) throw new UserException(UserErrorCode.ACCESS_DENIED);
        reportRepository.save(Report.builder()
                        .consulting(consulting)
                        .build());
    }
    public ReportResponse findReport(Long consultingId, User user){
        Consulting consulting = consultingRepository
                .findById(consultingId).orElseThrow(()->new ConsultingException(NOT_EXISTS_CONSULTANT));
        if (consulting.getUser().getId()!=user.getId()) throw new UserException(UserErrorCode.ACCESS_DENIED);
        reportRepository
                .findByConsulting(consulting).orElseThrow(()->new ReportException(NOT_EXISTS))
    }

}
