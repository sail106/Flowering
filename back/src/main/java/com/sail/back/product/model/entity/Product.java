package com.sail.back.product.model.entity;

import com.sail.back.product.model.dto.response.ProductResponse;
import com.sail.back.product.model.entity.enums.ProductType;
import com.sail.back.report.model.entity.Report;
import jakarta.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Entity
@Builder
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;

    @ManyToOne
    @JoinColumn(name = "report_id")
    private Report report;

    @Column(name = "product_name")
    private String productName;

    @Enumerated(EnumType.STRING)
    @Column(name = "recommended_product_type")
    private ProductType recommendedProductType;

    @Column(length = 500, name = "product_image_uri")
    private String productImageUri;

    @Column(length = 500, name = "product_description")
    private String productDescription;

    @Column(length = 500, name = "product_purchase_link")
    private String productPurchaseLink;

    public ProductResponse toResponse(){
        return ProductResponse.builder()
                .productId(this.productId)
                .productName(this.productName)
                .recommendedProductType(this.recommendedProductType)
                .productImageUri(this.productImageUri)
                .productDescription(this.productDescription)
                .productPurchaseLink(this.productPurchaseLink)
                .build();
    }
}
