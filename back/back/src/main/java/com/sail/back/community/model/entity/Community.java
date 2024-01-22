package com.sail.back.community.model.entity;

//import com.sail.back.customerCommunity.model.entity.CustomerCommunity;

import com.sail.back.global.domain.BaseTimeEntity;
import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.security.PrivateKey;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@AllArgsConstructor
public class Community extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long community_id;

    private String title;
    private String content;
    private String sessionId;
    private String imageurl;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private Timestamp community_open_date;





}
