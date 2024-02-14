package com.sail.back.user.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.user.model.dto.request.FindRequest;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.AuthProvider;
import com.sail.back.user.model.entity.enums.UserGender;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.entity.enums.UserStatus;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.time.LocalDateTime;
import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class UserResponse {

    private Long id;
    private String email;
    private String name;
    private String nickname;
    private LocalDateTime createAt;
    private AuthProvider provider;
    private UserRole role;
    private UserStatus status;
    private String profileImgUrl;
    private UserGender gender;
    private String birthdateYear;
    private String birthdateMonth;
    private boolean hasAdditionalInfo;
}

