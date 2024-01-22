package com.sail.back.product.model.entity;

import com.sail.back.product.model.entity.enums.ProductType;
import com.sail.back.report.model.entity.Report;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
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

 @Column(name = "product_image_uri")
 private String productImageUri;

 @Column(name = "product_description")
 private String productDescription;

 @Column(name = "product_purchase_link")
 private String productPurchaseLink;

}
