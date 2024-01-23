package com.sail.back.community.model.entity;

import com.sail.back.user.model.entity.User;
import jakarta.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "reservation_community")
@Builder
@AllArgsConstructor
public class ReservationCommunity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_id")
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Community community;
}
