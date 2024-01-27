package com.sail.back.face.utils;

import com.sail.back.face.model.dto.response.CoordinateDto;

public class calculator {
    private double calculateSlope(CoordinateDto p1, CoordinateDto p2) {
        return (double) ((p2.getY() - p1.getY()) / (p2.getX() - p1.getX()));
    }

}
