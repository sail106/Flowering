package com.sail.back.hashtag.model.repository;

import com.sail.back.hashtag.model.entity.HashTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface HashTagRepository extends JpaRepository<HashTag, Long> {



//    Optional< > deleteHashTagByHahstagId(Long id);

}
