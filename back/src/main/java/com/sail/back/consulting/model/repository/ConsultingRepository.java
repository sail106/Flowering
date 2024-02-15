package com.sail.back.consulting.model.repository;

import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consulting.model.entity.Consulting;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;


public interface ConsultingRepository extends JpaRepository<Consulting, Long> {


    Optional<Consulting> findByConsultantAndDateAndTime(Consultant consultant, LocalDate date, LocalTime time);

    Optional<List<Consulting>> findAllByConsultantAndDateAndTime(Consultant consultant, LocalDate date, LocalTime time);

    Optional<List<Consulting>> findAllByConsultantOrderByDateDesc(Consultant consultant);

    Optional<List<Consulting>> findAllByUserIdAndDateAndTime(Long id, LocalDate date, LocalTime time);

    Optional<List<Consulting>> findAllByUserId(Long id);

    Optional<Consulting> findByUserIdAndTimeAndDate(Long id, LocalDate date, LocalTime time);

    Optional<Consulting> findByDateAndTime(LocalDate date, LocalTime time);

    Optional<List<Consulting>> findAllByDate(LocalDate date);
}
