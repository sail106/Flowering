package com.sail.back.product.model.service;

import com.sail.back.global.utils.NaverOpenApiUtils;
import com.sail.back.product.model.dto.response.ProductResponse;
import com.sail.back.product.model.dto.response.naver.Item;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductService {
    private final NaverOpenApiUtils naverOpenApiUtils;
    public Mono<List<ProductResponse>> suchProduct(String suchText, Long start, Long display, String sort){
        return naverOpenApiUtils.sendSuchNaverShop(suchText, start, display, sort)
                .map(searchResult ->
                        // Item 객체를 ProductResponse 객체로 변환
                        searchResult.getItems().stream()
                                .map(Item::toResponse)
                                .collect(Collectors.toList())
                );
    }
}
