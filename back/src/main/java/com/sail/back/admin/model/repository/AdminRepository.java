package com.sail.back.admin.model.repository;

import com.sail.back.admin.model.entity.Admin;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

public interface AdminRepository extends JpaRepository<Admin,Long> {


}
