package com.sail.back.global.token;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NaverOAuthToken {
    private String access_token;
    private String refresh_token;
    private String token_type;
    private String expires_in;

    public NaverOAuthToken() {
    }

    public String getAccess_token() {
        return access_token;
    }

    public void setExpires_in(String expires_in) {
        this.expires_in = expires_in;
    }
}