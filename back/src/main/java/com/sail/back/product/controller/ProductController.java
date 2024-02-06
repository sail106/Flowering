package com.sail.back.product.controller;

import com.sail.back.global.utils.MessageUtils;
import com.sail.back.product.model.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/v1/product")
public class ProductController {

    private final ProductService productService;


    @GetMapping("/search")
    public Mono<ResponseEntity<MessageUtils>> suchProduct(
        @RequestParam String query,
        @RequestParam(required = false, defaultValue = "1") Long start,
        @RequestParam(required = false, defaultValue = "10") Long display,
        @RequestParam(required = false, defaultValue = "sim") String sort
    ){
        return productService.suchProduct(query, start, display, sort)
                .map(productResponses -> ResponseEntity.ok().body(MessageUtils.success(productResponses)));
    }
}
