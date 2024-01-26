import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Stack } from '@mui/material';
import ChatItem from '../chat/ChatItem';
import ParticipantItem from './ParticipantItem';
 
const ParticipantList = () => {
  // const { messageList } = useSelector(state => state.community)

  const msgSetting = () => {
    const participantList = [];
    // let i = messageList.length < 10 ? 0 : messageList.length - 10
    let i = 0;
    // for (; i < messageList.length; i++) {
    for (; i < 5; i++) {
      participantList.push(
        <ParticipantItem
          // key={messageList[i].id}
          key={i}
          // avatar={messageList[i].imageUrl}
          avatar={
            'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
          }
          // side={messageList[i].side ?? 'left'}
          side={'left'}
          // message={messageList[i].message}
          name={'김싸피'}
        />
      );
    }

    return participantList;
  };

  return (
    <ListBox>
      {msgSetting()}
    </ListBox>
  );

};

export default ParticipantList;

const ListBox = styled(Stack)`
  width: 100%;
  height: 90%;
  overflow-y: auto; /* 수직 스크롤을 추가합니다 */
   margin-top: 11px;
  /* border: 6px solid #decfda99; */
`;
 