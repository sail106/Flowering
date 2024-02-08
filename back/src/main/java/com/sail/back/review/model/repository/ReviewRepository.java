package com.sail.back.review.model.repository;

import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.review.model.entity.Review;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review,Long> {

    Optional<List<Review>> findAllByConsultant (Consultant consultant);
}
