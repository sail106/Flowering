package com.sail.back.report.model.service;

import com.sail.back.consulting.exception.ConsultingException;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.consulting.model.repository.ConsultingRepository;
import com.sail.back.report.exception.ReportErrorCode;
import com.sail.back.report.exception.ReportException;
import com.sail.back.report.model.dto.request.SaveAnalysisRequest;
import com.sail.back.report.model.dto.request.SaveSurveyRequest;
import com.sail.back.report.model.dto.response.SurveyResponse;
import com.sail.back.report.model.entity.Report;
import com.sail.back.report.model.repository.ReportRepository;
import com.sail.back.user.exception.UserErrorCode;
import com.sail.back.user.exception.UserException;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.sail.back.consulting.exception.ConsultingErrorCode.NOT_EXISTS_CONSULTANT;

@Service
@Slf4j
@RequiredArgsConstructor
public class SurveyService {

    private final ReportRepository reportRepository;
    private final ConsultingRepository consultingRepository;

    @Transactional
    public void saveSurvey(User user, SaveSurveyRequest request, Long consultingId) {
        Consulting consulting = consultingRepository
                .findById(consultingId).orElseThrow(() -> new ConsultingException(NOT_EXISTS_CONSULTANT));
        if (consulting.getUser().getId() != user.getId()) throw new UserException(UserErrorCode.ACCESS_DENIED);
        Report report = reportRepository
                .findByConsulting(consulting).orElseThrow(() -> new ReportException(ReportErrorCode.NOT_EXISTS));
        report.surveySave(request);
        reportRepository.save(report);
    }

    @Transactional
    public SurveyResponse findSurvey(User user, Long consultingId){
        Consulting consulting = consultingRepository
                .findById(consultingId).orElseThrow(() -> new ConsultingException(NOT_EXISTS_CONSULTANT));
        if (consulting.getUser().getId() != user.getId()) throw new UserException(UserErrorCode.ACCESS_DENIED);
        Report report = reportRepository
                .findByConsulting(consulting).orElseThrow(() -> new ReportException(ReportErrorCode.NOT_EXISTS));
    }
}
