package com.sail.back.contents.model.entity;

import com.sail.back.contents.model.dto.response.ContentsResponse;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;


@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "contents")
@Builder
@AllArgsConstructor
public class Contents {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contents_id")
    private Long contentsId;

    @Column(length = 50)
    private String category;

    @Column(length = 50)
    private String title;

    @Lob
    private String content;

    @Column(name = "create_at", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createAt;

    public ContentsResponse toResponse(){
        return ContentsResponse.builder()
                .contentsId(this.contentsId)
                .category(this.category)
                .title(this.title)
                .content(this.content)
                .build();
    }
}
