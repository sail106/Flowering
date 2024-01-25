package com.sail.back.community.model.service;

import com.sail.back.community.exception.CommunityErrorCode;
import com.sail.back.community.exception.CommunityException;
import com.sail.back.community.model.dto.request.CommunityAddRequest;
import com.sail.back.community.model.dto.request.CommunityEditRequest;
import com.sail.back.community.model.dto.response.CommunityListResponse;
import com.sail.back.community.model.dto.response.CommunityResponse;
import com.sail.back.community.model.entity.Community;
import com.sail.back.community.model.entity.enums.CommunityStatus;
import com.sail.back.community.model.repository.CommunityRepository;
import com.sail.back.community.model.repository.ReservationCommunityRepository;
import com.sail.back.user.exception.UserErrorCode;
import com.sail.back.user.exception.UserException;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
                .orElseThrow(() -> new CommunityException(CommunityErrorCode.COMMUNITY_NOT_FOUND));
        if (community.getUser().getId()!=loginUser.getId()) throw new UserException(UserErrorCode.ACCESS_DENIED);
        communityRepository.delete(community);
    }

    public void editCommunity(CommunityEditRequest request, User loginUser){
        Community community = communityRepository.findById(request.getCommunityId())
                .orElseThrow(() -> new CommunityException(CommunityErrorCode.COMMUNITY_NOT_FOUND));
        if (community.getUser().getId()!=loginUser.getId()) throw new UserException(UserErrorCode.ACCESS_DENIED);
        community.editCommunity(request);
        communityRepository.save(community);
    }
    public void editStatusCommunity(Long communityId, CommunityStatus status, User loginUser){
        Community community = communityRepository.findById(communityId)
                .orElseThrow(() -> new CommunityException(CommunityErrorCode.COMMUNITY_NOT_FOUND));
        if (community.getUser().getId()!=loginUser.getId()) throw new UserException(UserErrorCode.ACCESS_DENIED);
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

            if (response.getStatus().equals(CommunityStatus.BEFORE_ACTIVE)){
                beforeActiveCommunities.add(response);
            } else if (response.getStatus().equals(CommunityStatus.ACTIVE)) {
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
                .map(result -> result.toResponse(user))
                .collect(Collectors.toList());
    }



}
