import styled from 'styled-components';
import Progress from './FirstSurveyPage/ProgressBar';
import QuestionPage from './FirstSurveyPage/QuestionPage';
import Button from './common/Button';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PageSetting = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const Page = styled.div`
	flex-direction: column;
	width: 70%;
	align-items: center;
`;

const FirstTest = styled.div`
	text-align: center;
	font-family: 'Noto Sans KR';
	font-size: 17px;
	font-style: normal;
	font-weight: 400;
	color: #f28482;
`;

const Title = styled.div`
	text-align: center;
	font-family: 'Noto Sans KR';
	font-size: 50px;
	font-style: bold;
	font-weight: 400;
	margin-top: 15px;
	margin-bottom: 50px;
`;

const ProgressSubject = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 30px;
`;

const ServeyStatus = styled.div`
	white-space: pre-line;
	font-family: 'Noto Sans KR';
	font-size: 2opx;
	font-weight: 400;
	color: #b1b1b1;
	color: ${(props) => (props.active ? '#f28482' : '#b1b1b1')};
`;

const FirstServeyPage = () => {
	const question = [
		{
			titleMain: 'Part1',
			titleSub: '건성(D)·지성(O)',
			data: [
				{
					questionTitle:
						'클렌징 후에 아무것도 바르지 않고 밝은 빛 아래서 거울을 보세요. 이마와 볼이 어떻게 보이고 느껴집니까?',
					items: [
						{ text: '매우 거칠고, 버석거리고 각질이 들떠보입니다.', score: 1 },
						{ text: '당깁니다.', score: 2 },
						{ text: '당기지 않고 건조해 보이지 않고 번들거리지 않습니다.', score: 3 },
						{ text: '밝은 빛에 반사되는 듯이 번들거립니다.', score: 4 },
					],
				},
				{
					questionTitle: '사진을 찍었을 때, 피부가 번들거립니까?',
					items: [
						{ text: '결코 그렇지 않습니다.', score: 1 },
						{ text: '때때로 그렇습니다.', score: 2 },
						{ text: '자주 그렇습니다.', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
					],
				},
				{
					questionTitle:
						'평소 메이크업 파운데이션(마우더는 안 바른 상태)을 바른 지 2~3시간 후에 메이크업 상태가 어떻습니까?',
					items: [
						{ text: '약간 들떠 보이고 주름진 부분이 나타닙니다.', score: 1 },
						{ text: '부드러워 보입니다.', score: 2 },
						{ text: '번들거립니다.', score: 3 },
						{ text: '고정이 안되고 번들거립니다.', score: 4 },
						{ text: '페이셜 파운데이션을 바르지 않습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '건조할 때 모이스처라이저를 바르지 않으면 피부가 어떠합니까?',
					items: [
						{ text: '건조하고 갈라질 것 같습니다.', score: 1 },
						{ text: '당김을 느낍니다.', score: 2 },
						{ text: '정상적입니다.', score: 3 },
						{ text: '번들거리고 모이스처라이저가 필요 없습니다.', score: 4 },
						{ text: '잘 모르겠습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '얼굴을 보았을 때, 모공이 많고 사이즈가 커 보입니까?',
					items: [
						{ text: '아니오.', score: 1 },
						{ text: '이마와 코가 두드러져 보입니다.', score: 2 },
						{ text: '많이 보입니다.', score: 3 },
						{ text: '엄청 많이 보입니다.', score: 4 },
						{ text: '잘 모르겠습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '평소 당신의 피부 타입을 어떻게 생각하고 계십니까?',
					items: [
						{ text: '건성', score: 1 },
						{ text: '중성', score: 2 },
						{ text: '복합', score: 3 },
						{ text: '지성', score: 4 },
					],
				},
				{
					questionTitle: '거품이 많이 나는 비누를 사용할 때 피부의 상태는 어떠합니까?',
					items: [
						{ text: '건조하고 갈라집니다.', score: 1 },
						{ text: '약간 건조하고 갈라지지는 않습니다.', score: 2 },
						{ text: '정상입니다.', score: 3 },
						{ text: '금방 유분기가 올라옵니다.', score: 4 },
						{
							text: '비누나 거품이 나는 클렌저를 사용하지 않습니다.\n(그 이유가 피부가 건조해져서 그렇다면 1번을 선택하십시오)',
							score: 2.5,
						},
					],
				},
				{
					questionTitle: '모이스처라이저를 안 발랐을 때 피부가 당기는 느낌이 있습니까?',
					items: [
						{ text: '항상 그렇습니다.', score: 1 },
						{ text: '때때로 그렇습니다.', score: 2 },
						{ text: '거의 그렇지 않습니다.', score: 3 },
						{ text: '결코 그렇지 않습니다.', score: 4 },
					],
				},
				{
					questionTitle: '화이트헤드나 블랙헤드가 있습니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '거의 그렇지 않습니다.', score: 2 },
						{ text: '때때로 그렇습니다', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
					],
				},
				{
					questionTitle: '이마와 코 부위가 번들거리는 느낌이 있습니까?',
					items: [
						{ text: '결코 그렇지 않습니다.', score: 1 },
						{ text: '때때로 그렇습니다.', score: 2 },
						{ text: '자주 그렇습니다.', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
					],
				},
				{
					questionTitle: '모이스처라이저를 바르고 2~3시간 후 볼 부위의 피부 상태 는 어떻습니까?',
					items: [
						{ text: '매우 거칠고 각질이 일어나거나 또는 각질이 떨어짐니다.', score: 1 },
						{ text: '부드럽습니다.', score: 2 },
						{ text: '조금 번들거림이 있습니다.', score: 3 },
						{ text: '번들거리고 기름집니다.', score: 4 },
					],
				},
			],
		},
		{
			titleMain: 'Part2',
			titleSub: '민감성(S)·지향성(R)',
			data: [
				{
					questionTitle: '얼굴에 붉은 여드름이 있습니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '거의 없습니다.', score: 2 },
						{ text: '최소 달에 한 번 정도 나타납니다.', score: 3 },
						{ text: '최소 주에 한 번 정도 나타납니다.', score: 4 },
					],
				},
				{
					questionTitle:
						'클렌저, 토너. 모이스처라이저를 비롯한 화장품을 피부에 적 용했을 때 발진이나, 가렵고 쏘는 듯한 증상이 나타납니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '거의 없습니다.', score: 2 },
						{ text: '자주 그렇습니다.', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
						{ text: '제품을 바르지 않습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '여드름이나 로사시아로 진단받은 적이 있습니까?',
					items: [
						{ text: '아니오.', score: 1 },
						{ text: '다른 사람들이 볼 때 그렇다고 합니다.', score: 2 },
						{ text: '네, 약간 그렇습니다.', score: 3 },
						{ text: '네. 심각한 정도입니다.', score: 4 },
						{ text: '모르겠습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '자외선 차단제 사용 후 피부가 가렵거나 붉게 타는 듯한 느 낌, 여드름이 올라온 적이 있습니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '거의 없습니다.', score: 2 },
						{ text: '자주 그렇습니다.', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
						{ text: '잘 모르겠습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '아토피. 습진 또는 접촉성 피부염으로 진단받은 적이 있습니까?',
					items: [
						{ text: '아니오.', score: 1 },
						{ text: '다른 사람이 볼 때 그렇다고 합니다.', score: 2 },
						{ text: '네, 약간 그렇습니다.', score: 3 },
						{ text: '네. 심각한 정도입니다.', score: 4 },
						{ text: '모르겠습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '반지를 꼈던 자리에 붉게 발진이 나타납니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '거의 없습니다.', score: 2 },
						{ text: '자주 그렇습니다.', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
						{ text: '반지를 끼지 않습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '향이 강한 화장품 사용 후 피부가 간지럽거나 건조하고 뒤집어진 적이 있습니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '거의 없습니다.', score: 2 },
						{ text: '자주 그렇습니다.', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
						{
							text: '위와 같은 타입의 제품을 사용하지 않습니다\n(그 이유가 위의 현상 때문이라면 1번을 선택하십시오)',
							score: 2.5,
						},
					],
				},
				{
					questionTitle: '여행 시 호텔에서 제공되는 화장품을 사용하고 나서 문제가 없었습니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '거의 없습니다.', score: 2 },
						{ text: '피부가 간지럽고 붉어지고 또는 무언가 올라옵니다.', score: 3 },
						{ text: '사용하지 않습니다. 과거에 문제를 겪었기 때문입니다.', score: 4 },
						{ text: '평소 쓰는 제품을 가지고 다녀서 잘 모르겠습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '가족 중에 아토피, 습진. 알레르기 천식을 가지고 있는 사람이  있습니까?',
					items: [
						{ text: '없습니다.', score: 1 },
						{ text: '한 명 정도 있습니다.', score: 2 },
						{ text: '여러 명 있습니다.', score: 3 },
						{ text: '많습니다.', score: 4 },
						{ text: '잘 모르겠습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '향기나는 세정제나 정전기 방지제를 사용한 옷을 입을 때 어떻습니까?',
					items: [
						{ text: '괜찮습니다.', score: 1 },
						{ text: '약간 드라이합니다.', score: 2 },
						{ text: '가렵습니다.', score: 3 },
						{ text: '가렵고 무언가 올라옵니다.', score: 4 },
						{ text: '사용하지 않거나 잘 모르겠습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '운동, 스트레스, 감정 변화 등으로 얼굴과 목이 얼마나 자주 붉어집니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '때때로 그렇습니다.', score: 2 },
						{ text: '자주 그렇습니다.', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
					],
				},
				{
					questionTitle: '술을 마시면 피부가 붉어지거나 타는 듯한 듯한 느낌이 얼마나 자주 있습니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '때때로 그렇습니다.', score: 2 },
						{ text: '자주 그렇습니다.', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
						{ text: '음주를 하지 않습니다.', score: 2.5 },
					],
				},
				{
					questionTitle:
						'매운 음식이나 뜨거운 음식을 먹으면 피부가 붉어지거나 달 아오르는 느낌이 얼마나 자주 있습니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '때때로 그렇습니다.', score: 2 },
						{ text: '자주 그렇습니다.', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
						{ text: '매운 음식을 먹지 않습니다.\n(그 이유가 위의 현상 때문이라면 1번을 체크해주세요!)', score: 2.5 },
					],
				},
				{
					questionTitle: '얼굴과 특히 코 주변에 눈에 띄는 붉음증이나 혈관 확장된 부분이 얼마나 있습니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '때때로 그렇습니다(코를 포함해서 1~3부분).', score: 2 },
						{ text: '약간 있습니다.(코를 포함해서 4~6부분)', score: 3 },
						{ text: '많습니다.(코를 포함해서 7부분 이상)', score: 4 },
					],
				},
				{
					questionTitle: '사진 찍을 때 얼굴이 붉습니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '때때로 그렇습니다.', score: 2 },
						{ text: '자주 그렇습니다.', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
					],
				},
				{
					questionTitle: '실제로 선번(일광 화상)을 입지 않았는데도 그렇게 보여집니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '때때로 그렇습니다.', score: 2 },
						{ text: '자주 그렇습니다.', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
						{ text: '항상 선번을 입습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '스킨케어 및 메이크업 제품으로 피부가 가렵거나, 붓거나, 붉어지는 증상을 가지고 있습니까?',
					items: [
						{ text: '결코 없습니다.', score: 1 },
						{ text: '때때로 그렇습니다.', score: 2 },
						{ text: '자주 그렇습니다.', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
						{ text: '제품을 사용하지 않는다\n(그 이유가 위의 현상 때문이라면 4번을 체크해주세요)', score: 2.5 },
					],
				},
			],
		},
		{
			titleMain: 'Part3',
			titleSub: '색소침착(P)·비색소성(N))',
			data: [
				{
					questionTitle: '여드름이나 피부 속으로 파고드는 인그로운 헤어가 발생한 후에 다크스팟이 생깁니까?',
					items: [
						{ text: '없거나 본 적 없습니다.', score: 1 },
						{ text: '때때로 그렇습니다.', score: 2 },
						{ text: '자주 그렇습니다.', score: 3 },
						{ text: '항상 그렇습니다.', score: 4 },
						{ text: '여드름이나 인그로운 헤어가 없습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '무언가에 베이거나 상처가 생기고 난 후, 어둡거나 붉은 기가 얼마나 오래도록 남아있습니까?',
					items: [
						{ text: '없거나 본 적 없습니다.', score: 1 },
						{ text: '1주 정도 남아있습니다.', score: 2 },
						{ text: '몇 주 정도 남아있습니다.', score: 3 },
						{ text: '여러 달 남아있습니다.', score: 4 },
					],
				},
				{
					questionTitle: '임신이나 피임약 복용, 호르몬 대체요법 시 과하게 색소침착 된 부분이 얼마나 맣이 있었습니까?',
					items: [
						{ text: '없습니다.', score: 1 },
						{ text: '한 구역 있습니다.', score: 2 },
						{ text: '여러 구역 있습니다.', score: 3 },
						{ text: '엄청 많습니다.', score: 4 },
						{ text: '본인에게 해당이 되지 않습니다.', score: 2.5 },
					],
				},
				{
					questionTitle:
						'윗입술이나 양 볼에 어두운 부분이 있습니까? 또는 과거 있 었던 적이 있어 시술 등으로 제거했습니까?',
					items: [
						{ text: '없습니다.', score: 1 },
						{ text: '잘 모르겠습니다.', score: 2 },
						{ text: '약간 보입니다.', score: 3 },
						{ text: '여러 부분 보입니다.', score: 4 },
					],
				},
				{
					questionTitle: '햇빛을 오래 쬐면 피부 위에 있는 어두운 부분들이 더 심해집니까?',
					items: [
						{ text: '어두운 패치 부위가 없습니다.', score: 1 },
						{ text: '잘 모르겠습니다.', score: 2 },
						{ text: '약간 심해집니다.', score: 3 },
						{ text: '많이 심해집니다.', score: 4 },
						{
							text: '선크림을 매일 바르고 가급적 햇빛을 보지 않습니다.\n(그 이유가 위의 현상 때문이라면 4번을 체크해주세요!)',
							score: 2.5,
						},
					],
				},
				{
					questionTitle: '기미, 좀 옅거나 어두운 갈색 또는 회색의 스팟이 있다고 진단받은 적이 있습니까?',
					items: [
						{ text: '없습니다.', score: 1 },
						{ text: '그런 적이 있지만 지금은 없습니다.', score: 2 },
						{ text: '지금도 있습니다.', score: 3 },
						{ text: '심각하게 많습니다.', score: 4 },
						{ text: '잘 모르겠습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '얼굴, 가슴, 등 또는 팔에 작은 갈색의 스팟들을 가지고 있거나 가졌던 적이 있습니까?',
					items: [
						{ text: '없습니다.', score: 1 },
						{ text: '약간 있습니다(1~5개).', score: 2 },
						{ text: '많이 있습니다(6~15개).', score: 3 },
						{ text: '엄청 많습니다.(16 이상).', score: 4 },
					],
				},

				{
					questionTitle: '몇 달 만에 처음으로 햇빛에 노출 되었을 때 피부는 어떻습니까?',
					items: [
						{ text: '빨갛게 변합니다.', score: 1 },
						{ text: '붉게 변하고 나서 어두워집니다.', score: 2 },
						{ text: '점점 어두워집니다.', score: 3 },
						{ text: '피부가 검거나 검게 변했다는 것을 잘 모르겠습니다.', score: 4 },
					],
				},
				{
					questionTitle: '몇 일 동안 지속적으로 햇볕을 본다면 무슨 일이 일어납니까?',
					items: [
						{ text: '선번과 물집이 나타나나 피부색은 변화하지 않습니다.', score: 1 },
						{ text: '피부가 좀 더 어두워집니다.', score: 2 },
						{ text: '피부가 많이 어두워집니다.', score: 3 },
						{ text: '피부가 이미 검은 편입니다.', score: 4 },
						{ text: '잘 모르겠습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '염색을 하지 않았을 때 원래 머리색은 무슨 색 입니까?',
					items: [
						{ text: '금발입니다.', score: 1 },
						{ text: '갈색입니다.', score: 2 },
						{ text: '검정색입니다.', score: 3 },
						{ text: '붉은색입니다.', score: 4 },
					],
				},
			],
		},
		{
			titleMain: 'Part4',
			titleSub: '주름(W)·탱탱한(T))',
			data: [
				{
					questionTitle: '얼굴에 주름이 있습니까?',
					items: [
						{ text: '아니오. 웃거나 찡그리거나 눈썹을 들어올려도 주름이 생기지 않습니다.', score: 1 },
						{ text: '표정 지을 때만 생깁니다.', score: 2 },
						{ text: '표정을 지을 때도 생기고 표정을 짓지 않아도 주름이 있습니다.', score: 3 },
						{ text: '별다른 포정을 짓고 있지 않아도 주름이 많이 있습니다.', score: 4 },
					],
				},
				{
					questionTitle: '당신의 어머니의 피부 나이는 얼마로 보이십니까?',
					items: [
						{ text: '나이보다 5~10년 어려보입니다.', score: 1 },
						{ text: '나이 그대로 보입니다.', score: 2 },
						{ text: '5년 정도 더 나이 들어 보입니다.', score: 3 },
						{ text: '5년 이상 더 나이 들어 보입니다.', score: 4 },
						{ text: '알아볼 수 있는 문제가 아닙니다 (입양 또는 사망, 전혀 기억이 안남.)', score: 2.5 },
					],
				},
				{
					questionTitle: '당신의 아버지의 피부 나이는 얼마로 보입니까?',
					items: [
						{ text: '나이보다 5~10년 어려 보입니다.', score: 1 },
						{ text: '나이 그대로 보입니다.', score: 2 },
						{ text: '5년 정도 더 나이 들어 보입니다.', score: 3 },
						{ text: '5년 이상 더 나이들어 보입니다.', score: 4 },
						{ text: '알아볼 수 있는 문제가 아닙니다\n(입양 또는 전혀 기억이 안남)', score: 2.5 },
					],
				},
				{
					questionTitle: '당신의 외할머니의 피부 나이는 얼마로 보입니까?',
					items: [
						{ text: '나이보다 5~10년 어려 보입니다.', score: 1 },
						{ text: '나이 그대로 보입니다.', score: 2 },
						{ text: '5년 정도 더 나이 들어 보입니다.', score: 3 },
						{ text: '5년 이상 더 나이들어 보입니다.', score: 4 },
						{ text: '알아볼 수 있는 문제가 아닙니다\n(입양 또는 사망전혀 기억이 안남)', score: 2.5 },
					],
				},
				{
					questionTitle: '당신의 외할아버지의 피부 나이는 얼마로 보입니까?',
					items: [
						{ text: '나이보다 5~10년 어려 보입니다.', score: 1 },
						{ text: '나이 그대로 보입니다.', score: 2 },
						{ text: '5년 정도 더 나이 들어 보입니다.', score: 3 },
						{ text: '5년 이상 더 나이들어 보입니다.', score: 4 },
						{ text: '알아볼 수 있는 문제가 아닙니다\n(입양 또는 사망전혀 기억이 안남)', score: 2.5 },
					],
				},
				{
					questionTitle: '당신의 친할머니의 피부 나이는 얼마로 보입니까?',
					items: [
						{ text: '나이보다 5~10년 어려 보입니다.', score: 1 },
						{ text: '나이 그대로 보입니다.', score: 2 },
						{ text: '5년 정도 더 나이 들어 보입니다.', score: 3 },
						{ text: '5년 이상 더 나이들어 보입니다.', score: 4 },
						{ text: '알아볼 수 있는 문제가 아닙니다\n(입양 또는 사망전혀 기억이 안남)', score: 2.5 },
					],
				},
				{
					questionTitle: '당신의 친할아버지의 피부 나이는 얼마로 보입니까?',
					items: [
						{ text: '나이보다 5~10년 어려 보입니다.', score: 1 },
						{ text: '나이 그대로 보입니다.', score: 2 },
						{ text: '5년 정도 더 나이 들어 보입니다.', score: 3 },
						{ text: '5년 이상 더 나이들어 보입니다.', score: 4 },
						{ text: '알아볼 수 있는 문제가 아닙니다\n(입양 또는 사망전혀 기억이 안남)', score: 2.5 },
					],
				},
				{
					questionTitle: '살면서 2주 이상 피부를 태닝 했던 적이 있습니까? 만약 했다면 얼마나 반복했습니까?',
					items: [
						{ text: '없습니다.', score: 1 },
						{ text: '1~5년 정도 반복했습니다.', score: 2 },
						{ text: '5~10년 정도 반복했습니다.', score: 3 },
						{ text: '10년 이상 반복했습니다.', score: 4 },
					],
				},
				{
					questionTitle: '거주지를 기준으로 하루에 얼마나 많이 태양에 노출됩니까?',
					items: [
						{ text: '거의 없습니다. 대부분 실내에 머물고 햇빛을 많이 보는 곳이 아닙니다.', score: 1 },
						{ text: '약간 그렇습니다. 햇빛이 강하지는 않으나 일반적으로 해를 보고 삽니다.', score: 2 },
						{ text: '적당히 그렇습니다. 꽤 햇빛 노출되어 지냅니다.', score: 3 },
						{ text: '꽤 많습니다. 적도 인근 국가로 햇빛이 쨍쨍한 지역에 삽니다.', score: 4 },
					],
				},
				{
					questionTitle: '본인은 겉보기에 나이가 어느 정도 되어 보입니까?',
					items: [
						{ text: '나이보다 1~5년정도 젊어 보입니다.', score: 1 },
						{ text: '나이 그대로 보입니다.', score: 2 },
						{ text: '5년 정도 더 나이 들어 보입니다.', score: 3 },
						{ text: '5년 이상 더 나이들어 보입니다.', score: 4 },
					],
				},
				{
					questionTitle: '최근 5년동안 실외 스포츠나 활동 등으로 피부를 햇빛에 오래도록 노출한 적이 있습니까?',
					items: [
						{ text: '없습니다.', score: 1 },
						{ text: '한 달에 한 번 있습니다.', score: 2 },
						{ text: '일주일에 한 번 있습니다.', score: 3 },
						{ text: '매일 그렇습니다.', score: 4 },
					],
				},
				{
					questionTitle: '태닝을 받는다면 얼마나 자주 방문합니까?',
					items: [
						{ text: '없습니다.', score: 1 },
						{ text: '1~5번 정도 방문합니다.', score: 2 },
						{ text: '5~10번 정도 방문합니다.', score: 3 },
						{ text: '상당히 많이 방문합니다.', score: 4 },
					],
				},
				{
					questionTitle:
						'살면서 흡연한 경험이 있습니까? 만약 흡연자라면 얼마나 자주 담배를 핍니까? 혹은 담배 피는 환경에 얼마나 자주 노출되어 있습니까?',
					items: [
						{ text: '없습니다.', score: 1 },
						{ text: '몇 보루 정도 폈습니다.', score: 2 },
						{ text: '여러 보루 폈습니다.', score: 3 },
						{ text: '매일 담배를 핍니다.', score: 4 },
						{ text: '흡연은 하지 않지만 흡연자와 같은 환경에 살고 있습니다.', score: 2.5 },
					],
				},
				{
					questionTitle: '거주하는 곳의 공기 오염도는 어떻습니까?',
					items: [
						{ text: '맑고 깨끗합니다.', score: 1 },
						{ text: '맑고 깨끗한 때도 있고 그렇지 않을 때도 있습니다.', score: 2 },
						{ text: '약간 오염되어 있습니다.', score: 3 },
						{ text: '공기 오염이 심합니다.', score: 4 },
					],
				},
				{
					questionTitle: '레티놀, 레틴-A, 디페린과 같은 비타민 페이셜 크림을 얼마나 오래 사용하셨나요?',
					items: [
						{ text: '수년 동안 꾸준히 사용했습니다.', score: 1 },
						{ text: '때때로 그렇습니다.', score: 2 },
						{ text: '어렸을 때 여드름으로 인해 사용한 적 있습니다.', score: 3 },
						{ text: '없습니다.', score: 4 },
					],
				},
				{
					questionTitle: '평소 과일과 채소를 얼마나 자주 드십니까?',
					items: [
						{ text: '매일 먹습니까?', score: 1 },
						{ text: '하루에 한 번 먹습니다.', score: 2 },
						{ text: '때때로 챙겨 먹습니다.', score: 3 },
						{ text: '아예 먹지 않습니다.', score: 4 },
					],
				},
				{
					questionTitle: '하루 먹는 것 중에서 과일과 채소가 차지하는 비율은 얼마나 됩니까?',
					items: [
						{ text: '75%~100%', score: 1 },
						{ text: '25%~75%', score: 2 },
						{ text: '10%~25%', score: 3 },
						{ text: '0~10%', score: 4 },
					],
				},
				{
					questionTitle: '본연의 피부색은 어떻습니까?',
					items: [
						{ text: '어둡습니다.', score: 1 },
						{ text: '중간 톤입니다.', score: 2 },
						{ text: '밝은 톤입니다.', score: 3 },
						{ text: '매우 밝은 톤입니다.', score: 4 },
					],
				},
				{
					questionTitle: '당신의 인종은 어떻게 됩니까?',
					items: [
						{ text: '아프리칸, 아메리칸', score: 1 },
						{ text: '아시안', score: 2 },
						{ text: '라틴', score: 3 },
						{ text: '코카시언', score: 4 },
					],
				},
			],
		},
	];

	const [index, setIndex] = useState(0);
	const [trueFalseArray, setTrueFalseDataArray] = useState(Array.from({ length: question.length }, () => false));
	const [MBTIScore, setMBTIScore] = useState([0, 0, 0, 0]);
	const [data, setData] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const consultingId = location.state.value.consulting_id;
	const baseurl = import.meta.env.VITE_APP_BASE_URL;
	let point = 0;

	const updateTrueFalseArray = (cardIndex, dataArray) => {
		trueFalseArray[cardIndex] = true;
		point = 0;
		for (let i = 0; i < dataArray.length; i++) {
			if (dataArray[i] === 0) {
				trueFalseArray[cardIndex] = false;
			}
			point = point + dataArray[i];
		}
		if (trueFalseArray[cardIndex] == true) {
			// MBTIScore를 상태로 업데이트합니다.
			setMBTIScore((prevScores) => {
				const newScores = [...prevScores];
				newScores[index] += point;
				return newScores;
			});
		}
	};

	const Token = useSelector((state) => state.auth.logonUser);
	const checkINdex = (Token) => {
		if (trueFalseArray[index] == true) {
			if (index < 3) {
				setIndex(index + 1);
				window.scrollTo({ top: 0, behavior: 'smooth' });
			} else {
				let result = '';
				if (MBTIScore[0] > 26) {
					result = result + 'D';
				} else {
					result = result + 'O';
				}

				if (MBTIScore[1] > 29) {
					result = result + 'S';
				} else {
					result = result + 'R';
				}

				if (MBTIScore[2] > 30) {
					result = result + 'P';
				} else {
					result = result + 'N';
				}

				if (MBTIScore[0] > 40) {
					result = result + 'W';
				} else {
					result = result + 'T';
				}

				// axios를 사용하여 POST 요청을 보냅니다.
				axios
					.post(
						`${baseurl}survey/save/${consultingId}`,
						{
							survey_type: `${result}`,
						},
						{
							headers: {
								Authorization: `Bearer ${Token.access_token}`,
							},
						}
					)
					.then((res) => {
						setData(res.data.data_body);
						navigate('/firstsurveyresult', { state: { value: { consultingId } } });
					})
					.catch((error) => {
						console.log(error);
						throw new Error(error);
					});
			}
		} else {
			alert('설문을 완료해주세요');
		}
	};
	return (
		<PageSetting>
			<Page>
				<FirstTest>1차 피부진단 테스트</FirstTest>
				<Title>피부 타입 MBTI 테스트</Title>
				{/* value값은 props로 받음 */}
				<Progress value={25 * (index + 1)} />
				<ProgressSubject>
					{question.map((item, idx) => (
						<ServeyStatus key={idx} active={index >= idx}>
							{`${item.titleMain}\n${item.titleSub}`}
						</ServeyStatus>
					))}
				</ProgressSubject>
				<QuestionPage
					titleMain={question[index].titleMain}
					titleSub={question[index].titleSub}
					data={question[index].data}
					onChange={(dataArry) => {
						// isSelected 값이 변경될 때마다 해당 인덱스에 맞는 값을 업데이트합니다.
						updateTrueFalseArray(index, dataArry); // 인덱스와 totalScore를 함께 전달
					}}
					resetIndex={index}
				/>
			</Page>
			<Button onClick={() => checkINdex(Token)}>{index === 3 ? '결과 보기' : '다음'}</Button>
		</PageSetting>
	);
};

export default FirstServeyPage;
