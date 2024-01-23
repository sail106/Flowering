package com.sail.back.community.model.service;

import com.sail.back.community.model.dto.request.CommunityAddRequest;
import com.sail.back.community.model.repository.CommunityRepository;
import com.sail.back.community.model.repository.ReservationCommunityRepository;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class CommunityService {

    private final CommunityRepository communityRepository;
    private final ReservationCommunityRepository reservationCommunityRepository;

    public void addCommunity(CommunityAddRequest request, User user){
        communityRepository.save(request.toEntity(user));
    }

    public void deleteCommunity(){}




}
