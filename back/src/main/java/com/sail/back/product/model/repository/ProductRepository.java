package com.sail.back.product.model.repository;

import com.sail.back.product.model.entity.Product;
import com.sail.back.report.model.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByReport(Report report);
}
