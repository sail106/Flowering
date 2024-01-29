package com.sail.back.faq.model.repository;

import com.sail.back.faq.model.entity.FAQ;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface FAQRepository extends JpaRepository<FAQ, Long> {
    List<FAQ> findAll();
    Long countBy();
}
