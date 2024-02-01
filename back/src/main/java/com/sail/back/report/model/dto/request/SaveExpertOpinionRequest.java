package com.sail.back.report.model.dto.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.product.model.dto.request.ProductRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class SaveExpertOpinionRequest {
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
    private List<ProductRequest> productList;
}
