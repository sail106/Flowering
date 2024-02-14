package com.sail.back.report.model.entity.enums;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.report.model.dto.response.SurveyResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;


@Getter
@AllArgsConstructor
public enum SurveyType {
    DRPT("건성 | 색소 형 피부", "여드름 & 모공 하나 보이지 않은 타고난 달걀 피부","고운 피부 결, 염증 반응이 거의 나타나지 않음","건조함, 자외선에 취약한 편", "SPF 30+ 이상의 자외선 차단제, 브라이트닝 성분이 함유된 모이스처라이저"),
    DRNT("건성 | 최고의 피부 형", "모든 피부 고민으로부터 자유로운 일명 건강 피부(한국인에게 흔한 타입)", "꺠끗한 피부 결 및 톤, 피부 문제가 거의 없음","약간의 건조함", "데일리 모이스처라이저, 주기적인 각질 관리"),
    DSPT("건성 | 민감, 색소 형 피부", "피부가 좋았던 적이 없는 모태 개복치 피부", "끝까지 탄력을 잃지 않는 편, 개선의 여지가 존재","건조함과 반복되는 염즘으로 고르지 못한 피부 톤, 국소적인 소양감", "보습이 1순위, 알레르기 유발 성분 제외, 반드시 민감성 제품만 사용. 패치테스트 필수"),
    DSNT("건성 | 민감 형 피부", "작은 자극에도 쉽게 붉어지는 선인장 피부(한국인에게 흔한 타입)","다크스팟과 주름, 모공이 적은편", "극심한 건조함과 화끈거림, 각질과 붉은 기가 동시에 나타남","저자극 클렌징, 오메가-3 섭취"),
    DRPW("건성 | 색소, 주름 형 피부", "빛나는 리즈 시절만 믿고 방치하다 나이 들어 훅 간 피부", "자극에 강한 피부", "건조하고 당기는 피부, 다크스팟, 이마와 눈가의 주름", "SPF 30+ 이상의 자외선 차단제, 레티놀 등 브라이트닝 필링, 항산화제, 모이스처라이저"),
    DRNW("건성 | 주름 형 피부", "해가 지날수록 노화 속도가 빠르게 나타나는 피부", "균일한 피부 톤","건조함, 미세한 잔주름","SPF 15+이상의 자외선 차단제, 항산화제"),
    DSPW("건성 | 민감, 색소, 주름 형 피부","영원히 고통받는 총체적 난국 건성 민감 피부","없음","피부가 매우 민감하고 얇아 자극에 쉽게 반응, 주름이 생기기 쉬움, 모든 종류의 문제를 가지고 있는 피부","반드시 민감성 제품만 사용, 패치테스트 필수, 전문가에 의한 엄격한 피부 관리 필요"),
    DSNW("건성 | 색소 형 피부","단점보다 장점이 많고 관리하기 쉬운 메추리알 피부","주름과 자극에 강한 편", "번들거림, 어둡고 칙칙한 피부 톤","SPF 30+이상의 자외선 차단제, 브라이트닝 필링"),
    ORNT("지성 | 최고의 피부 형", "흠잡을 것 하나 없는 건강한 광채 탱탱볼 피부(한국인에게 흔한 타입)","부드럽고 유연한 피부","모공이 큰 편, 블랙헤드가 생기기 쉬움","피지 흡착 성분, 논-코메도제닉 보습제"),
    OSPT("지성 | 민감, 색소형 피부","여드름과 색소침착이 있지만 주름은 쉽게 지지 않는 피부","끝까지 탄력을 잃지 않는 편, 개선의 여지가 존재","피지, 염증, 색소 침착의 악순환 반복","반드시 민감성 제품만 사용할 것, 필링은 가급적 자제, 피부 장벽 강화 성분, 오일 베이스 및 워터프루프 제품 사용 자제"),
    OSNT("지성 | 민감 형 피부","성인 여드름이 올라올 수 있지만 50대 이후 진정한 승리자 피부(한국인에게 흔한 타입)","여드름 자국으로 이어지지 않는 편, 나이가 들수록 관리하기 쉬움","번들거림. 염증 반응으로 인한 붉은 기","저자극 데일리 모이스처라이저"),
    ORPW("지성 | 색소 주름 형 피부","모공이 넓지만 여드름은 쉽게 나지 않는 감귤 피부","자극에 강한 피부", "번들거림, 균일하지 못한 피부 톤, 모공이 넓은 편","SPF 30+ 이상의 자외선 차단제, 항산화제"),
    ORNW("지성 | 주름 형 피부","여드름은 쉽게 올라오지 않지만 때이른 잔주름이 나타나기 쉬운 지성 피부","매끈한 피부","건조 타입보다는 적지만 잔주름이 쉽게 나타나는 편","항산화 필링"),
    OSPW("지성 | 민감, 색소, 주름 형 피부", "영원히 고통 받는 총체적 난국 지성 민감 피부","없음","여드름부터, 색소, 주름이 생기기 쉬움","반드시 민감성 제품만 사용할 것, 패치테스트 필수, 전문가에 의한 엄격한 피부 관리 필요"),
    OSNW("지성 | 민감, 주름","햇빛에 쉽게 붉어지고 번들거리며 종종 여드름이 보이는 피부", "피부가 햇빛에 붉어질 뿐 검게 변하지 않음","번들거림, 주름이 생기기 쉬움","저자극 데일리 모이스처라이저, 항산화제");
    private String skinType;
    private String content;
    private String strength;
    private String weakness;
    private String solution;

    public SurveyResponse toResponse(){
        SurveyResponse response = new SurveyResponse();
        if (this!=null){
            if (this.name()!=null&&!this.name().isEmpty())response.setSurveyType(this.name());
            if (this.content!=null&&!this.content.isEmpty())response.setContent(this.content);
            if (this.skinType!=null&&!this.skinType.isEmpty())response.setSkinType(this.skinType);
            if (this.solution!=null&&!this.solution.isEmpty())response.setSolution(this.solution);
            if (this.weakness!=null&&!this.weakness.isEmpty())response.setWeakness(this.getWeakness());
        }
        return response;
    }
}