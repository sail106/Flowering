package com.sail.back.report.model.dto.response.gpt;

import com.sail.back.report.model.dto.request.gpt.Message;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Choice {
    private Message message;
}
