package com.sail.back.community.model.repository;

import com.sail.back.community.model.entity.Community;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommunityRepository extends JpaRepository<Community, Long> {
}
