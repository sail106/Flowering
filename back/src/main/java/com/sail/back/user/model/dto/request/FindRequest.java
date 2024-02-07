package com.sail.back.user.model.dto.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.User;
import lombok.*;
import lombok.extern.slf4j.Slf4j;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class FindRequest {

    private boolean id;
    private boolean email;
    private boolean name;
    private boolean nickname;
    private boolean create_at;
    private boolean provider;
    private boolean role;
    private boolean status;
    private boolean profile_img_url;
    private boolean gender;
    private boolean birthdate_year;
    private boolean birthdate_month;

    public UserResponse toResponse(User user){
        UserResponse response = new UserResponse();
        if (!this.isId()&&user.getId()!=null) response.setId(user.getId());
        if (!this.isEmail()&&user.getEmail()!=null) response.setEmail(user.getEmail());
        if (!this.isName()&&user.getName()!=null) response.setName(user.getName());
        if (!this.isNickname()&&user.getNickname()!=null) response.setNickname(user.getNickname());
        if (!this.isCreate_at()&&user.getCreateAt()!=null) response.setCreateAt(user.getCreateAt());
        if (!this.isProvider()&&user.getProvider()!=null) response.setProvider(user.getProvider());
        if (!this.isRole()&&user.getRole()!=null) response.setRole(user.getRole());
        if (!this.isStatus()&&user.getStatus()!=null) response.setStatus(user.getStatus());
        if (!this.isProfile_img_url()&&user.getProfileImgUrl()!=null) response.setProfileImgUrl(user.getProfileImgUrl());
        if (!this.isGender()&&user.getGender()!=null) response.setGender(user.getGender());
        if (!this.isBirthdate_year()&&user.getBirthdateYear()!=null) response.setBirthdateYear(user.getBirthdateYear());
        if (!this.isBirthdate_month()&&user.getBirthdateMonth()!=null) response.setBirthdateMonth(user.getBirthdateMonth());
        if(user.getName() == null || user.getBirthdateYear() == null || user.getBirthdateMonth()== null || user.getName() == null || user.getGender() == null) response.setHasAdditionalInfo(true);
        return response;
    }
}
