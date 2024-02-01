package com.sail.back.product.model.dto.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.product.model.entity.Product;
import com.sail.back.product.model.entity.enums.ProductType;
import com.sail.back.report.model.entity.Report;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class ProductRequest {
    private String productName;
    private ProductType recommendedProductType;
    private String productImageUri;
    private String productDescription;
    private String productPurchaseLink;
    public Product toEntity(Report report){
        return Product.builder()
                .report(report)
                .productName(this.productName)
                .recommendedProductType(this.recommendedProductType)
                .productImageUri(this.productImageUri)
                .productDescription(this.productDescription)
                .productPurchaseLink(this.productPurchaseLink)
                .build();
    }
}
