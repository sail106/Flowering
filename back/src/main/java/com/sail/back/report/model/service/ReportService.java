package com.sail.back.report.model.service;

import com.sail.back.consulting.exception.ConsultingException;
import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.consulting.model.repository.ConsultingRepository;
import com.sail.back.product.model.dto.response.ProductResponse;
import com.sail.back.product.model.entity.Product;
import com.sail.back.product.model.entity.enums.ProductType;
import com.sail.back.product.model.repository.ProductRepository;
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

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

 import static com.sail.back.consulting.exception.ConsultingErrorCode.NOT_EXISTS_CONSULTING;
import static com.sail.back.report.exception.ReportErrorCode.*;

@Service
@Slf4j
@RequiredArgsConstructor
public class ReportService {

    private final ReportRepository reportRepository;
    private final ConsultingRepository consultingRepository;
    private final ProductRepository productRepository;

    public void createReport(Long consultingId, User user){
        Consulting consulting = consultingRepository
                .findById(consultingId).orElseThrow(()->new ConsultingException(NOT_EXISTS_CONSULTING));
        if (consulting.getUser().getId()!=user.getId()) throw new UserException(UserErrorCode.ACCESS_DENIED);
        //todo : 이미존재하는 경우 예외처리해야함.
        reportRepository.save(Report.builder()
                        .consulting(consulting)
                        .build());
    }
    public ReportResponse findReport(Long consultingId, User user){
        Consulting consulting = consultingRepository
                .findById(consultingId).orElseThrow(() -> new ConsultingException(NOT_EXISTS_CONSULTING));
        if (!(consulting.getUser().getId()==user.getId()||consulting.getConsultant().getUser().getId()==user.getId())) throw new UserException(UserErrorCode.ACCESS_DENIED);
        Report report = reportRepository
                .findByConsulting(consulting).orElseThrow(() -> new ReportException(NOT_EXISTS));

        Map<Boolean, List<ProductResponse>> partitionedProducts = productRepository.findByReport(report)
                .stream()
                .map(Product::toResponse)
                .collect(Collectors.partitioningBy(response -> response.getRecommendedProductType() == ProductType.SKIN));

        return report.toResponse(partitionedProducts.get(true), partitionedProducts.get(false));
    }

}
