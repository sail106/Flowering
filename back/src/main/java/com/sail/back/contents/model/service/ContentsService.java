package com.sail.back.contents.model.service;

import com.sail.back.contents.exception.ContentsErrorCode;
import com.sail.back.contents.exception.ContentsException;
import com.sail.back.contents.model.dto.request.ContentsAddRequest;
import com.sail.back.contents.model.dto.request.ContentsUpdateRequest;
import com.sail.back.contents.model.dto.response.ContentsResponse;
import com.sail.back.contents.model.entity.Contents;
import com.sail.back.contents.model.repository.ContentsRepository;
import com.sail.back.user.exception.UserErrorCode;
import com.sail.back.user.exception.UserException;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.UserRole;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service
@Slf4j
@RequiredArgsConstructor
public class ContentsService {

    private final ContentsRepository contentsRepository;

    public ContentsResponse findOne(Long contentsId) {
        Contents contents = contentsRepository.findById(contentsId)
                .orElseThrow(() -> new ContentsException(ContentsErrorCode.Contents_NOT_FOUND));
        return contents.toResponse();
    }

    public List<ContentsResponse> findAll() {
        return contentsRepository.findAll()
                .stream()
                .map(Contents::toResponse)
                .collect(Collectors.toList());
    }

    public void addContents(User user, ContentsAddRequest request) {
        if (user.getRole().equals(UserRole.USER)) throw new UserException(UserErrorCode.ACCESS_DENIED);
        contentsRepository.save(request.toEntity());
    }

    public void deleteContents(User user, Long contentsId) {
        if (user.getRole().equals(UserRole.USER)) throw new UserException(UserErrorCode.ACCESS_DENIED);
        Contents contents = contentsRepository.findById(contentsId).orElseThrow(() -> new ContentsException(ContentsErrorCode.Contents_NOT_FOUND));
        contentsRepository.delete(contents);
    }

    public void updateContents(User user, Long contentsId, ContentsUpdateRequest request) {
        if (user.getRole().equals(UserRole.USER)) throw new UserException(UserErrorCode.ACCESS_DENIED);

        Contents contents = contentsRepository.findById(contentsId)
                .orElseThrow(() -> new ContentsException(ContentsErrorCode.Contents_NOT_FOUND));

        contents.setTitle(request.getTitle());
        contents.setContent(request.getContent());
        contents.setCategory(request.getCategory());

    }



}
