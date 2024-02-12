import CommunityHeader from "./community/CommunityHeader";
import CircleImg from "./common/CircleImg";
import Button from "./common/Button";
import Card from "./common/Card";
import CenterContainer from "./common/CenterContainer";
import ContentsCard from "./common/ContentsCard";
import BIBI from "../assets/BIBI.png"
import blogpost1 from "../assets/blogpost1.png"
import communityHome1 from "../assets/communityHome1.png"

import styled from "styled-components";
import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const StyledDiv = styled.div`
  color: #6D6D6D;
  text-align: center;
  margin-bottom: 40px;
  font-size: 20px;
`;

const TempCard = styled.div`
  margin: 150px 70px;
`;

const Styledh2 = styled.h2`
  margin-left: 4%;
  margin-top: 130px;
`;

const CommunityPage = () => {

  const { session } = useSelector(state => state.community)
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://i10c106.p.ssafy.io:8080/v1/community/findlist')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("errr:", err);
      })
  }, [])

  useEffect(() => {
    if (session) {
      session.on('streamCreated', streamCreated)
      session.on('streamDestroyed', streamDestroyed)
      session.on('exception', exception)
      getToken().then(sessionConnect);
    }
  }, [session])


  const sessionConnect = (token) => {

    session
      .connect(
        token, { clientData: myUserName, clientRole: role },
      )

      .then(() => {
        console.log('tokk  ' + token)

        let publisher = OV.initPublisher(undefined, {
          audioSource: undefined,
          videoSource: undefined,
          publishAudio: true,
          publishVideo: true,
          resolution: '1280x960',
          frameRate: 30,
          insertMode: 'APPEND',
          mirror: false,
        });

        publisher.subscribeToRemote()
        session.publish(publisher);
        setPublisher(publisher);

        // if (role === CUSTOMER) { dispatch(setCustomer(publisher)) }
        // if (role === CUSTOMER) 
        setCreator(publisher)

        // 이벤트 리스너 추가
        session.on('streamCreated', streamCreated)
        session.on('streamDestroyed', streamDestroyed)
        session.on('exception', exception)
        console.log(' OneToManyVideoChat')

        navigate('/OneToManyVideoChat')
      })
      .catch((error) => { });
  }

  const createSession = (sessionId) => {
    return new Promise((resolve, reject) => {

      const data = JSON.stringify({ customSessionId: String(sessionId) });


      console.log('Basic ' + btoa(
        'OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET))

      console.log('session added' + session)
      console.log(sessionId)

      console.log(data)
      console.log(OPENVIDU_SERVER_URL + '/openvidu/api/sessions')


      axios
        .post(OPENVIDU_SERVER_URL + '/openvidu/api/sessions', data, {
          headers: {
            Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET,POST',
          },
        })

        .then((response) => {
          resolve(response.data);
        })

        .catch((response) => {
          var error = Object.assign({}, response);
          if (error?.response?.status === 409) {
            resolve(sessionId);
          }
        });

    });
  }

  const getToken = () => {
    console.log('commid' + community_id)
    return createSession(community_id).then((sessionId) => createToken(sessionId));

  }

  const createToken = (sessionId) => {
    console.log(sessionId)
    console.log(OPENVIDU_SERVER_URL + "/openvidu/api/sessions/" + String(sessionId) + "/connection")
    return new Promise((resolve, reject) => {
      const data = {
        "type": "WEBRTC",
        "role": "PUBLISHER",
        "kurentoOptions": {
          "videoMaxRecvBandwidth": 1000,
          "videoMinRecvBandwidth": 300,
          "videoMaxSendBandwidth": 1000,
          "videoMinSendBandwidth": 300,
          "allowedFilters": [
            "GStreamerFilter",
            "FaceOverlayFilter",
            "ChromaFilter"
          ]
        }
      };

      axios
        .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions/" + String(sessionId) + "/connection", data, {
          headers: {
            Authorization: 'Basic ' + btoa(
              'OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET
            ),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST',
          },
        })

        .then((response) => {
          resolve(response.data.token);
        })
        .catch((error) => reject(error));
    });
  }

  const handleEnterButtonClick = (community_id) => {
    console.log('버튼클릭' + community_id)
    console.log('session' + session)

    if (session) {
      console.log('session' + session)
    }
    else {
      console.log('dsfsdf')
    }
    navigate('/OneToManyVideoChat')
  };

  const makeroom = () => {
    navigate('/communityReservation')
  };

  return (
    <>
      <Card>
        <CenterContainer>
          <CommunityHeader />
          <CircleImg
            src={BIBI}
            scale="1.2"
            margin-bottom="40px"
          />
          <h3>키티공주님,</h3>
          <StyledDiv>화상 미팅을 열어 나만의 뷰티 노하우를<br />
            친구들에게 공유해보세요.</StyledDiv>
          <Button width="300px" onClick={makeroom}>
            커뮤니티 방 개설하기</Button>
        </CenterContainer>
      </Card>
      <TempCard>
        <Styledh2>실시간 인기 커뮤니티</Styledh2>

        <ContentsCard
          cardMarginTop="0px"
          // paddingTop="0px"
          imageSrc={communityHome1}
          imageAlt="recommend-item"
          title="깐달걀 피부 만드는 추천템 공개"
          description="여드름 피부였던 제가
          깐달걀 피부가 될 수 있었던 화장품을 공개합니다!!"
          isButton="true"
          buttonText="입장하기"
          onClick={() => handleEnterButtonClick("0")}
        />

        <Styledh2>미공개 커뮤니티</Styledh2>
        <ContentsCard
          cardMarginTop="0px"
          // paddingTop="0px"
          imageSrc={blogpost1}
          imageAlt="recommend-item"
          title="일상 생활 속 나의 뷰티 습관"
          description="저만의 뷰티 습관 공개합니닷 ㅋㅋ"
          isButton="true"
          buttonText="내 일정에 추가하기"
          borderColor="#DCDCDC"
          backgroundColor="white"
          color="#383838"
        />

      </TempCard>
    </>
  );
};

export default CommunityPage;