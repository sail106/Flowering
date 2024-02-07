package com.sail.back.payment.controller;


import com.sail.back.payment.utils.PaymentUtils;

import com.siot.IamportRestClient.exception.IamportResponseException;
import com.siot.IamportRestClient.response.IamportResponse;
import com.siot.IamportRestClient.response.Payment;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@Slf4j
public class PaymentController {
    private final PaymentUtils paymentUtils;

    @PostMapping("/verifyIamport/{imp_uid}")
    public IamportResponse<Payment> paymentByImpUid(
            @PathVariable("imp_uid") String imp_uid
    ) throws IamportResponseException, IOException {
        return paymentUtils.getIamportClient().paymentByImpUid(imp_uid);
    }

}
