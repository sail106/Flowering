package com.sail.back.report.model.repository;

import com.sail.back.consulting.model.entity.Consulting;
import com.sail.back.report.model.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReportRepository extends JpaRepository<Report, Long> {
    Optional<Report> findByConsulting(Consulting consulting);
}
