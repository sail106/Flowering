package com.sail.back.hashtag.model.service;

import com.sail.back.consultant.exception.ConsultantErrorCode;
import com.sail.back.consultant.exception.ConsultantException;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.consultant.model.repository.ConsultantRepository;
import com.sail.back.hashtag.exception.HashTagErrorCode;
import com.sail.back.hashtag.exception.HashTagException;
import com.sail.back.hashtag.model.dto.request.HashTagCreateRequest;
import com.sail.back.hashtag.model.dto.request.HashTagUpdateRequest;
import com.sail.back.hashtag.model.entity.HashTag;
import com.sail.back.hashtag.model.repository.HashTagRepository;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class HashTagService {


    private final HashTagRepository hashTagRepository;
    private final ConsultantRepository consultantRepository;

    public HashTag createHashTag(HashTagCreateRequest hashTagRequest, User user) {

        Consultant consultant = consultantRepository.findByUser(user).orElseThrow(() ->
                new ConsultantException(ConsultantErrorCode.NOT_EXISTS_CONSULTANT));

        

        HashTag hashTag = hashTagRequest.toEntity();
        consultant.addHashTag(hashTag);

//        hashTag.setConsultant(consultant);

        return hashTagRepository.save(hashTag);


    }

    public void deleteHashTag(User user, Long id) { //hashtag 를 아이디로 없애고

        HashTag hashTag = hashTagRepository.findById(id).orElseThrow(() -> new HashTagException(HashTagErrorCode.NOT_EXISTS));

        Consultant consultant = consultantRepository.findByUser(user).orElseThrow(() ->
                new ConsultantException(ConsultantErrorCode.NOT_EXISTS_CONSULTANT));

        if (!consultant.getHashTags().stream().anyMatch(hashTag1 -> hashTag1.getHahstagId().equals(id))) {
            throw new HashTagException(HashTagErrorCode.NOT_MINE);
        }

//
//        consultant.getHashtag();

        hashTagRepository.delete(hashTag);
    }

//
//    public HashTag updateHashTag(User user, HashTagUpdateRequest hashTagUpdateRequest) {
//
//        Consultant consultant = consultantRepository.findByUser(user).orElseThrow(() ->
//                new ConsultantException(ConsultantErrorCode.NOT_EXISTS_CONSULTANT));
//
//        consultant.getHashtag()
//
//        HashTag hashTag = ;
//
//        hashTagRepository.save(hashTag);
//    }


}
