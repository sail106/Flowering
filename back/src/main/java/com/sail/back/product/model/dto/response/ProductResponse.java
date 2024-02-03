package com.sail.back.product.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.product.model.entity.enums.ProductType;
import com.sail.back.report.model.entity.Report;
import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class ProductResponse {

    private Long productId;
    private String productName;
    private ProductType recommendedProductType;
    private String productImageUri;
    private String productDescription;
    private String productPurchaseLink;
}
