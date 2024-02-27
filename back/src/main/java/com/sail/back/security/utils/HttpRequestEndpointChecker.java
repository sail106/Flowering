package com.sail.back.security.utils;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.DispatcherServlet;
import org.springframework.web.servlet.HandlerExecutionChain;
import org.springframework.web.servlet.HandlerMapping;

@Component
@RequiredArgsConstructor
public class HttpRequestEndpointChecker {
    private final DispatcherServlet dispatcherServlet;


    public boolean isEndpointExist(HttpServletRequest request){
        for(HandlerMapping handlerMapping: dispatcherServlet.getHandlerMappings()){
            try {
                HandlerExecutionChain handlerExecutionChain=handlerMapping.getHandler(request);
                if(handlerExecutionChain!=null){
                    return true;
                }
            }catch (Exception e){
                return  false;

            }
        }
        return false;

    }
}
