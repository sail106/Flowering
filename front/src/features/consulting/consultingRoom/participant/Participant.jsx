import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";

import { Box, Grid, IconButton } from '@mui/material'
import MessageIcon from '@mui/icons-material/Message';
import ChatList from '../chat/ChatList'
import { GoPersonAdd } from "react-icons/go";
import { VscFoldUp } from "react-icons/vsc";
import { appendMessageList } from '../communitySlice'
import ParticipantList from './ParticipantList';

const Participant = () => {

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
        message: msg
      }

      // dispatch(appendMessageList(mine))

      const data = {
        id: messageId,
        role: role,
        imageUrl: imageUrl,
        // side: 'left',
        message: msg
      }

      session.signal({
        data: JSON.stringify(data),
        to: [],
        type: 'chat'
      })
      setMsg('')
    }
  }

  // useEffect(() => {
  //   if (session) {
  //     session.on('signal:chat', textChat)
  //   }
  // }, [session])

  const textChat = (event) => {
    const data = JSON.parse(event.data)
    if (data.role !== role) {
      // dispatch(appendMessageList(data))
    }
  }

  return (

    <ChatGrid item xs={12}>
      <Header>
        <TitleText>
          참가자
        </TitleText>
        <InviteButton>
          초대하기

          <Personpos>
            <GoPersonAdd />

          </Personpos>


          {/* <VscFoldUp /> */}

        </InviteButton>
        <Foldpos>

          <VscFoldUp />

        </Foldpos>

      </Header>


      <ParticipantContainer>
        <ParticipantList />

      </ParticipantContainer>
      
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
}
`;

const Personpos = styled.div`
&& {
   position: absolute;
   right: 20%;
   top: 0;
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
     height: 39%;
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
     height: 4%;
     top: 2%;
     right: 30%;
     align-items: center;
     border-radius: 9px;
     margin-right: 3%;
   }
`;

const ChatGrid = styled(Grid)`
  && {
    width: 100%;
    height: 30vh;  
    display: flex;
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
