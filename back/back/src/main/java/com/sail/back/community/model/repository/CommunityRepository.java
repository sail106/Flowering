package com.sail.back.community.model.repository;

import com.sail.back.community.model.entity.Community;
import com.sail.back.user.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommunityRepository extends JpaRepository<Community, Long> {
    @Query("SELECT c, CASE WHEN rc is not null THEN true ELSE false END as isReserved FROM Community c LEFT JOIN ReservationCommunity rc ON c.id = rc.community.id AND rc.user.id = :userId")
    List<Object[]> findAllWithReservationStatus(@Param("userId") Long userId);

    List<Community> findByUser(User user);
}
