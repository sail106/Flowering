package com.sail.back.community.model.entity;


import com.sail.back.global.domain.BaseTimeEntity;
import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.security.PrivateKey;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@AllArgsConstructor
public class Community {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "community_id")
    private Long id;

    private String title;
    private String content;

    @Column(name = "thumbnail_img_url")
    private String thumbnailImgUrl;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "open_day")
    private LocalDateTime dDay;

}
