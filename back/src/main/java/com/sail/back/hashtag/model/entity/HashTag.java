package com.sail.back.hashtag.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sail.back.consultant.model.entity.Consultant;
import com.sail.back.hashtag.model.dto.response.HashTagResponse;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@AllArgsConstructor
@ToString
public class HashTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hashtagId;


    @ManyToOne
    @JoinColumn(name = "consultant_id")
    @JsonBackReference
    private Consultant consultant;


    @Column(nullable = false)
    private String workplace;

    public HashTagResponse from(HashTag hashTag) {
        return HashTagResponse.builder()
                .workplace(hashTag.getWorkplace())
                .build();
    }

    public void setConsultant(Consultant consultant){
        this.consultant=consultant;
    }

    public static HashTagResponse toHashTagResponse (HashTag hashTag)
    {
        return  HashTagResponse.builder()
                .consultantResponse(hashTag.consultant.toResponse())
                .workplace(hashTag.getWorkplace())
                .build();
    }

}
