package com.sail.back.report.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.product.model.dto.response.ProductResponse;
import lombok.*;

import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class ExpertOpinionResponse {
    private String skincareSkinState;
    private String skincareSolution;
    private String skincareMorning;
    private String skincareNight;
    private String makeupFacetype;
    private String makeupFacialexpression;
    private String makeupSolution;
    private String makeupShading;
    private String makeupBlusher;
    private String makeupHighlighting;
    private String makeupLipmakeup;
    private String makeupEyemakeup;
    private String makeupSkinmakeup;
    private String hairstyleHaircolor;
    private String hairstyleHairstyle;
    private String hairstyleSolution;
    private List<ProductResponse> recommendedSkinProducts;
    private List<ProductResponse> recommendedMakeUpProducts;
}
