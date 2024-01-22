package com.sail.back.user.model.service;

import com.sail.back.user.model.dto.request.FindRequest;
import com.sail.back.user.model.dto.request.UserRegistRequest;
import com.sail.back.user.model.dto.request.UserUpdateRequest;
import com.sail.back.user.model.dto.response.MyConsultinglistResponse;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.AuthProvider;
import com.sail.back.user.model.entity.enums.UserRole;

import java.time.LocalDateTime;
import java.util.List;

public interface UserService {

    void registUser(UserRegistRequest userRegistRequest, UserRole role, AuthProvider provider);
    UserResponse infoUser(FindRequest findRequest, User user);
    void withdrawUser(User user);
    void updateUser(UserUpdateRequest request, User user);


    List<MyConsultinglistResponse> myconsultinglist(Long id, LocalDateTime localDateTime);
}
