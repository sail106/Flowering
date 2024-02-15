package com.sail.back.contents.model.repository;

import com.sail.back.contents.model.entity.Contents;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContentsRepository extends JpaRepository<Contents, Long> {

}
