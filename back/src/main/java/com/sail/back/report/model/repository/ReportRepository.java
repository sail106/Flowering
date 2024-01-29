package com.sail.back.report.model.repository;

import com.sail.back.report.model.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report, Long> {
}
