package com.sail.back.report.model.dto.response.gpt;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
public class GptResponse {
    private List<Choice> choices;
}
