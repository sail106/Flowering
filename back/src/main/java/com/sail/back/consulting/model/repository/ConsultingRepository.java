package com.sail.back.consulting.model.repository;

import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consulting.model.entity.Consulting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;


public interface ConsultingRepository extends JpaRepository<Consulting, Long> {


    Optional<List<Consulting>> findAllByConsultantAndTime(Consultant consultant, LocalDateTime time);

        Optional<List<Consulting>> findAllByUserIdAndTime (Long id, LocalDateTime time);
}
