package com.sail.back.faq.model.service;

import com.sail.back.faq.exception.FAQErrorCode;
import com.sail.back.faq.exception.FAQException;
import com.sail.back.faq.model.dto.request.FAQAddRequest;
import com.sail.back.faq.model.dto.response.FAQResponse;
import com.sail.back.faq.model.entity.FAQ;
import com.sail.back.faq.model.repository.FAQRepository;
import com.sail.back.user.exception.UserErrorCode;
import com.sail.back.user.exception.UserException;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.UserRole;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class FAQService {

    private final FAQRepository faqRepository;

    public List<FAQResponse> findAll(){
        return faqRepository.findAll()
                .stream()
                .map(FAQ::toResponse)
                .collect(Collectors.toList());
    }

    public void addFAQ(User user, FAQAddRequest request){
        if (user.getRole().equals(UserRole.USER)) throw new UserException(UserErrorCode.ACCESS_DENIED);
        if (faqRepository.countBy()>10L) throw new FAQException(FAQErrorCode.LIMIT_EXCEEDED);
        faqRepository.save(request.toEntity());
    }

    public void deleteFAQ(User user, Long faqId){
        if (user.getRole().equals(UserRole.USER)) throw new UserException(UserErrorCode.ACCESS_DENIED);
        FAQ faq = faqRepository.findById(faqId).orElseThrow(() -> new FAQException(FAQErrorCode.FAQ_NOT_FOUND));
        faqRepository.delete(faq);
    }

}
