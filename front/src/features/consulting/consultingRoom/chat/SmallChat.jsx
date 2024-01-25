import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";

import { Box, Grid } from '@mui/material'
import MessageIcon from '@mui/icons-material/Message';
import ChatList from './ChatList'
import { IoIosSend } from "react-icons/io";
import { RiSendPlaneLine } from "react-icons/ri";
import { VscFoldUp } from "react-icons/vsc";

import { appendMessageList } from '../communitySlice'

const SmallChat = () => {
  const [msg, setMsg] = useState('');
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

  const Foldpos = styled.div`
  && {
     position: absolute;
     right: 10%;
     top: 36%;
     color: #df5050;
  }
  `;
  return (
    <ChatGrid item xs={12} >
      <Header>
        <TitleText>
          채팅
        </TitleText>

        <Person>
          <PersonText>
            개인

          </PersonText>
        </Person>
        <Group>
          그룹
        </Group>

        <Foldpos>

          <VscFoldUp />

        </Foldpos>

      </Header>


      <ChatContainer>
        <ChatList />

        {/* <Bottomcontent> */}

        <IContainer>

          <Input
            value={msg}
            placeholder="내용을 입력하세요..."
            onChange={(e) => { setMsg(e.target.value) }}
            onKeyUp={(e) => { if (e.key === 'Enter') { handleMessage() } }}
          >

          </Input>

          <IconButton onClick={handleMessage} >
            <PlanePos>
              <RiSendPlaneLine />

            </PlanePos>

          </IconButton>

        </IContainer>

        {/* </Bottomcontent> */}



      </ChatContainer>
    </ChatGrid>
  )
}

export default SmallChat;

const Group = styled.div`
  && {
    position: absolute;
    right: 50%;
    top: 35%;
    background-color: #F28482;;
    border-radius: 71px;;
    color: white;
    width: 19%;
    height: 5%;
    align-items: center;
    padding-left: 15px; /* Adjust the padding-right value as needed */

  }
`;

const Person = styled.div`
  && {
    position: absolute;
    right: 22%;
    top: 35%;
    background-color: #f3d1d1;
    border-radius: 15px;
    color: #e25050;
    width: 48%;
    height: 5%;
    align-items: center;
   }
`;

const PersonText = styled.div`
  && {
    position: absolute;
    right: 22%;
    top: 3%;
    background-color: #FFE9E3;;
    border-radius: 71px;;
    color: #e25050;
    width: 54%;
    height: 4%;
    align-items: center;
    text-align: right;
  }
`;
const PlanePos = styled.div`
  && {
    position: absolute;
    right: 25%;
    top: 15%;
  }
`;

const Header = styled.div`
  && {
   display: flex;
   flex-direction: row;
  /* border: 1px solid black; */
   height: 11%;
  }
`;

const IconButton = styled.div`
  && {
    /* font-size: 2rem; */
    height: 30px;
    width: 30px;
    /* padding: 0.2rem 1rem; */
    /* width: calc(100% - 100px); */
    /* border: 11px solid; */
    border-radius: 50%;
    background-color: #f28482;
    font-weight: bold; /* 글자를 진하게 설정 */
    align-items: center;
    position: absolute;
    right: 40%;
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
     height: 55%;
     align-items: center;
  }
`;


const ChatGrid = styled(Grid)`
  && {
    width: 100%;
    height: 66.5%;  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    border-radius: 4px;
    background-color: #F5F5F5;
    /* border: 2px solid black; */
     /* padding: 10px; */
  }
`;

const Bottomcontent = styled`
  && {
   background-color: #ffffff;
   /* border: 2px solid black; */
  }
`;

const ChatContainer = styled(Grid)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
     overflow: hidden;
  }
`;
const IContainer = styled(Box)`
  && {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;  
    background-color:  #ffffff;
     /* width: ; */
     /* border: 1px solid black; */
    height: 25%;
   }
`;

const Input = styled.input`
  && {
    font-size: 1rem;
    padding: 0.2rem 1rem;
    width:  49%;
      background-color:  #efeaea;
    margin-left: 5%;
    border-radius: 19px;
    height: 31%;
  }
`;
