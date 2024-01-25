package com.sail.back.community.model.entity;


import com.sail.back.community.model.dto.request.CommunityEditRequest;
import com.sail.back.community.model.dto.response.CommunityResponse;
import com.sail.back.community.model.dto.response.enums.CommunityRole;
import com.sail.back.community.model.entity.enums.CommunityStatus;
import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import lombok.*;



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
    private String openDay;

    @Column(name = "open_time")
    private String openTime;

    @Enumerated(EnumType.STRING)
    private CommunityStatus status;

    public CommunityResponse toResponse(User user, boolean isReserved) {
        CommunityResponse.CommunityResponseBuilder temp = CommunityResponse.builder()
                .communityId(this.id)
                .title(this.title)
                .content(this.content)
                .createrName(this.user.getName())
                .thumbnailImgUrl(this.thumbnailImgUrl)
                .openDay(this.openDay)
                .time(this.openTime)
                .status(this.status);
        if (user.getId() == this.user.getId()) return temp.role(CommunityRole.CREATOR).build();
        if (isReserved) return temp.role(CommunityRole.RESERVER).build();
        return temp.role(CommunityRole.NONE).build();
    }

    public void updateStatus(CommunityStatus status) {
        this.status = status;
    }

    public void editCommunity(CommunityEditRequest request) {
        this.title = request.getTitle();
        this.content = request.getContent();
        this.openDay = request.getOpenDay();
        this.openTime = request.getOpenTime();
        this.thumbnailImgUrl = request.getThumbnailImgUrl();
    }
}
