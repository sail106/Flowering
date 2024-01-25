package com.sail.back.community.model.repository;

import com.sail.back.community.model.entity.Community;
import com.sail.back.community.model.entity.ReservationCommunity;
import com.sail.back.user.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ReservationCommunityRepository extends JpaRepository<ReservationCommunity, Long> {
    boolean existsByCommunityAndUser(Community community, User user);
    List<ReservationCommunity> findByUser(User user);
}
