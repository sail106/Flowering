package com.sail.back.consulting.model.repository;

import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consulting.model.entity.Consulting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;


public interface ConsultingRepository extends JpaRepository<Consulting, Long> {


    Optional<Consulting> findByConsultantAndTime(Consultant consultant, LocalDateTime time);

    Optional<List<Consulting>> findAllByConsultantAndTime(Consultant consultant, LocalDateTime time);

    Optional<List<Consulting>> findAllByConsultantOrderByTimeDesc(Consultant consultant);

    Optional<List<Consulting>> findAllByUserIdAndTime(Long id, LocalDateTime time);

    Optional<List<Consulting>> findAllByUserId(Long id);

    Optional<Consulting> findByUserIdAndTime(Long id, LocalDateTime time);

    Optional<Consulting> findByTime(LocalDateTime time);
}
