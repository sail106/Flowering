package com.sail.back.admin.model.service;

import com.sail.back.admin.exception.AdminErrorCode;
import com.sail.back.admin.exception.AdminException;
import com.sail.back.admin.model.dto.request.UserToConsultantRequest;
import com.sail.back.consultant.model.dto.response.ConsultantListResponse;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consultant.model.repository.ConsultantRepository;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.user.exception.UserErrorCode;
import com.sail.back.user.exception.UserException;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.AuthProvider;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Slf4j
@Service
public class AdminService {

    private final UserRepository userRepository;
    private final ConsultantRepository consultantRepository;

    public ResponseEntity<MessageUtils> toConsultant(User me, UserToConsultantRequest userToConsultantRequest) {
        System.out.println("consultatnttt" + userToConsultantRequest.getEmail());

//        User user = userRepository.findById(userToConsultantRequest.getId()).
//                orElseThrow(() -> new UserException(UserErrorCode.NOT_EXISTS_USER));

        User user = userRepository.findByEmail(userToConsultantRequest.getEmail()).
                orElseThrow(() -> new UserException(UserErrorCode.NOT_EXISTS_USER));

        user.setRole(UserRole.CONSULTANT);

        if (!me.getRole().equals(UserRole.ADMIN)) {
            throw new AdminException(AdminErrorCode.NOT_ADMIN);
        }

        userRepository.save(user);

        Consultant consultant = Consultant.builder()
                .user(user)
                .build();

        consultantRepository.save(consultant);

        return ResponseEntity.ok(MessageUtils.success());
    }

}
