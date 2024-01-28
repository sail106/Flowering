package com.sail.back.face.utils;

import com.sail.back.face.model.dto.response.CoordinateDto;

import java.util.ArrayList;

public class Calculator {
    public double slope(CoordinateDto p1, CoordinateDto p2) {
        if((p2.getX() - p1.getX()) == 0 )
            return  0;
        else
            return (double) ((p2.getY() - p1.getY()) / (p2.getX() - p1.getX()));
    }

    public double distance(CoordinateDto p1, CoordinateDto p2) {
        double dx = p1.getX()-p2.getX();
        double dy = p1.getY()-p2.getY();
        return Math.sqrt((dx * dx) + (dy * dy));
    }

    public int closestY(ArrayList<CoordinateDto> list, int y) {

        double minDifference = Double.MAX_VALUE;
        int closestY = 64;
        // leftContourLeft 안에 있는 객체들 중에서 가장 가까운 X 값을 찾음
        for (int i = 0; i < list.size(); i++) {
            double difference = Math.abs(y - list.get(i).getY());
            if (difference < minDifference) {
                minDifference = difference;
                closestY = i;
            }
        }

        return closestY;
    }

    public int closestX(ArrayList<CoordinateDto> list, int x) {

        double minDifference = Double.MAX_VALUE;
        int closestX = 64;
        // leftContourLeft 안에 있는 객체들 중에서 가장 가까운 X 값을 찾음
        for (int i = 0; i < list.size(); i++) {
            double difference = Math.abs(x - list.get(i).getX());
            if (difference < minDifference) {
                minDifference = difference;
                closestX = i;
            }
        }

        return closestX;
    }

    public int findMaximalY(ArrayList<CoordinateDto> list) {

        int maxNow = list.get(0).getY();
        int maxY = 64;

        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getY() >= maxNow) {
                maxNow = list.get(i).getY();
                maxY = i;
            }
        }

        return maxY;
    }

    public int findMinimalY(ArrayList<CoordinateDto> list) {

        int minNow = list.get(0).getY();
        int minY = 64;

        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getY() <= minNow) {
                minNow = list.get(i).getY();
                minY = i;
            }
        }

        return minY;
    }

    public int findMaximalX(ArrayList<CoordinateDto> list) {
        int maxNow = list.get(0).getX();
        int maxX = 64;

        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getX() >= maxNow) {
                maxNow = list.get(i).getX();
                maxX = i;
            }
        }

        return maxX;
    }

    public int findMinimalX(ArrayList<CoordinateDto> list) {
        int minNow = list.get(0).getX();
        int minX = 64;

        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getX() <= minNow) {
                minNow = list.get(i).getX();
                minX = i;
            }
        }

        return minX;
    }
}
