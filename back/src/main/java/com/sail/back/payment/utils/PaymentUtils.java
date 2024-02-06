package com.sail.back.payment.utils;

import com.sail.back.payment.config.IamportProperties;
import com.siot.IamportRestClient.IamportClient;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@Data
@Service
@RequiredArgsConstructor
public class PaymentUtils {

    private final IamportProperties iamportProperties;

    @Bean
    public IamportClient getIamportClient(){
        return new IamportClient(iamportProperties.getKey(), iamportProperties.getSecret());
    }

}
