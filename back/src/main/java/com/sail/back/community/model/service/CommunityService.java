package com.sail.back.community.model.service;


import com.sail.back.community.exception.CommunityException;
import com.sail.back.community.model.dto.request.CommunityAddRequest;
import com.sail.back.community.model.dto.request.CommunityEditRequest;
import com.sail.back.community.model.dto.response.CommunityListResponse;
import com.sail.back.community.model.dto.response.CommunityResponse;
import com.sail.back.community.model.dto.response.enums.CommunityRole;
import com.sail.back.community.model.entity.Community;
import com.sail.back.community.model.entity.ReservationCommunity;
import com.sail.back.community.model.entity.enums.CommunityStatus;
import com.sail.back.community.model.repository.CommunityRepository;
import com.sail.back.community.model.repository.ReservationCommunityRepository;
import com.sail.back.user.exception.UserException;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.sail.back.community.exception.CommunityErrorCode.*;
import static com.sail.back.community.model.dto.response.enums.CommunityRole.*;
import static com.sail.back.community.model.entity.enums.CommunityStatus.*;
import static com.sail.back.user.exception.UserErrorCode.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class CommunityService {

    private final CommunityRepository communityRepository;
    private final ReservationCommunityRepository reservationCommunityRepository;

    public void addCommunity(CommunityAddRequest request, User loginUser){
        communityRepository.save(request.toEntity(loginUser));
    }

    public void deleteCommunity(Long communityId, User loginUser){
        Community community = communityRepository
                .findById(communityId)
                .orElseThrow(() -> new CommunityException(COMMUNITY_NOT_FOUND));
        if (community.getUser().getId()!=loginUser.getId()) throw new UserException(ACCESS_DENIED);
        communityRepository.delete(community);
    }

    public void editCommunity(CommunityEditRequest request, User loginUser){
        Community community = communityRepository.findById(request.getCommunityId())
                .orElseThrow(() -> new CommunityException(COMMUNITY_NOT_FOUND));
        if (community.getUser().getId()!=loginUser.getId()) throw new UserException(ACCESS_DENIED);
        community.editCommunity(request);
        communityRepository.save(community);
    }
    public void editStatusCommunity(Long communityId, CommunityStatus status, User loginUser){
        Community community = communityRepository.findById(communityId)
                .orElseThrow(() -> new CommunityException(COMMUNITY_NOT_FOUND));
        if (community.getUser().getId()!=loginUser.getId()) throw new UserException(ACCESS_DENIED);
        community.updateStatus(status);
        communityRepository.save(community);
    }

    public CommunityListResponse getCommunitiesListWithReservationStatus(User loginUser) {
        List<Object[]> results = communityRepository.findAllWithReservationStatus(loginUser.getId());
        List<CommunityResponse> beforeActiveCommunities = new ArrayList<>();
        List<CommunityResponse> activeCommunities = new ArrayList<>();
        List<CommunityResponse> postActiveCommunities = new ArrayList<>();
        for (Object[] result : results) {

            Community community = (Community) result[0];
            Boolean isReserved = (Boolean) result[1];
            CommunityResponse response = community.toResponse(loginUser, isReserved);

            if (response.getStatus().equals(BEFORE_ACTIVE)){
                beforeActiveCommunities.add(response);
            } else if (response.getStatus().equals(ACTIVE)) {
                activeCommunities.add(response);
            }else {
                postActiveCommunities.add(response);
            }
        }
        return CommunityListResponse.builder()
                .beforeActiveCommunities(beforeActiveCommunities)
                .activeCommunities(activeCommunities)
                .postActiveCommunities(postActiveCommunities)
                .build();
    }

    public List<CommunityResponse> getMyCreateCommunityList(User user){
        return communityRepository.findByUser(user)
                .stream()
                .map(result -> result.toResponse(CREATOR))
                .collect(Collectors.toList());
    }

    public void checkInCommunity(User user, Long communityId){
        Community community = communityRepository.findById(communityId).orElseThrow(() -> new CommunityException(COMMUNITY_NOT_FOUND));
        if (community.getUser().getId()==user.getId()) throw new CommunityException(NOT_ALLOWED_RESERVATION);
        if (reservationCommunityRepository.existsByCommunityAndUser(community, user)) throw new CommunityException(ALREADY_IN_RESERVATION);
        reservationCommunityRepository.save(
                ReservationCommunity
                        .builder()
                        .community(community)
                        .user(user)
                        .build());
    }

    public void checkOutCommunity(User user, Long reservationId){
        ReservationCommunity reservationCommunity = reservationCommunityRepository
                .findById(reservationId).orElseThrow(() -> new CommunityException(NOT_FOUND_RESERVATION));
        if (reservationCommunity.getUser().getId()!=user.getId()) throw new UserException(ACCESS_DENIED);
        reservationCommunityRepository.delete(reservationCommunity);
    }

    public CommunityListResponse getMyCheckInCommunities(User loginUser){
        List<ReservationCommunity> checkInCommunities = reservationCommunityRepository.findByUser(loginUser);
        List<CommunityResponse> beforeActiveCommunities = new ArrayList<>();
        List<CommunityResponse> activeCommunities = new ArrayList<>();
        List<CommunityResponse> postActiveCommunities = new ArrayList<>();
        for (ReservationCommunity checkInCommunity : checkInCommunities) {
            Community community = checkInCommunity.getCommunity();
            CommunityResponse response = community.toResponse(RESERVER);
            if (response.getStatus().equals(BEFORE_ACTIVE)){
                beforeActiveCommunities.add(response);
            } else if (response.getStatus().equals(ACTIVE)) {
                activeCommunities.add(response);
            }else {
                postActiveCommunities.add(response);
            }
        }
        return CommunityListResponse.builder()
                .beforeActiveCommunities(beforeActiveCommunities)
                .activeCommunities(activeCommunities)
                .postActiveCommunities(postActiveCommunities)
                .build();
    }
}
