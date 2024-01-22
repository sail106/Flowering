package com.sail.back.consultant.model.repository;

import com.sail.back.consultant.model.entity.Consultant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultantRepository extends JpaRepository<Consultant, Long> {

 }
