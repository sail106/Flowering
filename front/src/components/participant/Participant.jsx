import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";

import { Box, Grid, IconButton } from '@mui/material' 
import { GoPersonAdd } from "react-icons/go";
import { VscFoldUp } from "react-icons/vsc";
 import ParticipantList from './ParticipantList';
 

const Myspan = styled.span`
display:flex;
  justify-content:start;
  padding-top:6px;
  padding-left:5px;
`
const Participant = ({ streamManager, audioPermission }) => {
  
  const [isparticipantcontainervisible, setParticipantContainerVisible] = useState(true);

  const handleFoldUp = () => {
    // Fold up 버튼을 누를 때 ParticipantContainer의 표시 여부를 토글합니다.
    setParticipantContainerVisible((prevVisible) => !prevVisible);

  };

  const [msg, setMsg] = useState('')
  // const { role, imageUrl } = useSelector(state => state.auth.logonUser)
  // const { session, messageId } = useSelector(state => state.consult)
  // const dispatch = useDispatch()

  const handleMessage = () => {
    if (session && msg.length > 0) {
      const mine = {
        id: messageId,
        role: role,
        imageUrl: '',
        // side: 'left',
        name: msg
      }

      // dispatch(appendMessageList(mine))

      const data = {
        id: nameId,
        role: role,
        imageUrl: imageUrl,
        // side: 'left',
        name: msg
      }

      session.signal({
        data: JSON.stringify(data),
        to: [],
        type: 'chat'
      })

      setMsg('')
    }
  }
 

  const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
`;

  return (
    <ChatGrid item xs={12} isparticipantcontainervisible={isparticipantcontainervisible.toString()}>
      <ContentWrapper>

        <Header>
          <TitleText>
            참가자
          </TitleText>

          {/* <InviteButton>

            <Myspan >
              초대하기

            </Myspan>

            <Personpos>
              <GoPersonAdd />
            </Personpos>

          </InviteButton> */}

          <Foldpos onClick={handleFoldUp}>


            <VscFoldUp />

          </Foldpos>

        </Header>

      </ContentWrapper>


      {isparticipantcontainervisible && (
        <ParticipantContainer >
          <ParticipantList />
        </ParticipantContainer>
      )}

    </ChatGrid>
  )
}

export default Participant


const Foldpos = styled.div`
&& {
   position: absolute;
   right: 10%;
   top: 3%;
   color: #df5050;
   cursor: pointer; // 클릭 가능하도록 커서를 포인터로 변경

}
`;

const Personpos = styled.div`
&& {
   position: absolute;
   right: 12%;
   top: 0;
       transform: translateY(30%); /* Move the button up by half of its height */

}
`;

const TitleText = styled.div`
  && {
    font-size: 1rem;
    padding: 0.9rem 1rem;
    width: 100%;
    /* border: 11px solid; */
    background-color: #ffffff;
     font-weight: bold; /* 글자를 진하게 설정 */
     height: 80%;
     align-items: center;

  }
`;

const Header = styled.div`
  && {
   display: flex;
   flex-direction: row;
   justify-content: space-between; /* Add this line */

   /* height: 31%; */
  }
`;

const InviteButton = styled.div`
  && {
    font-size: 1rem;
    /* padding: 0.9rem 1rem; */
    width: 28%;
    /* border: 11px solid; */
       background-color   : #f5c8c7;
    position: absolute;
     font-weight: bold; /* 글자를 진하게 설정 */
     height: 5%;
     top: 1.5%;
     right: 30%;
     align-items: center;
     border-radius:  61px;;
     
     margin-right: 3%;
   }
`;

const ChatGrid = styled(Grid)`
  && {
    width: 100%;
      height: 30%;  
      
 
    /* display: flex; */
    flex-direction: column;
    justify-content: flex-end;
    overflow-y: auto; /* 수직 스크롤을 추가합니다 */

    overflow: hidden;
    border-radius: 4px;
    background-color: #F5F5F5;
    /* border: 2px solid #ddcfcf99; */
    /* padding: 10px; */
 
  }
`;


const ParticipantContainer = styled(Grid)`
&&{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
      /* border: 1px solid #5A4D4D99; */
      overflow-y: auto; /* 수직 스크롤을 추가합니다 */
  margin-left: 5%;
  overflow: hidden;
}
 
`;
const IContainer = styled(Box)`
  && {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;  
    
  }
`;

const Input = styled.input`&&{
  font-size: 1rem;
  padding: 0.2rem 1rem;
  width: calc(100% - 100px);
  /* border: 1px solid; */
  border-radius: 0.8rem;
}
`;
