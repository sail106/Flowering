import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Stack } from '@mui/material';
import ChatItem from './ChatItem';

const ChatList = () => {
  const { messageList } = useSelector(state => state.consult)

  const msgSetting = () => {

    const msgList = [];
    let i = messageList.length < 10 ? 0 : messageList.length - 10

    // let i = 0;

    for (; i < messageList.length; i++) {
    // for (; i < 5; i++) {
      msgList.push(
        <ChatItem
          // key={messageList[i].id}
          key={i}
          // avatar={messageList[i].imageUrl}
          avatar={
            'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
          }
          // side={messageList[i].side ?? 'left'}
          side={'left'}
          message={messageList[i].message}
          // message={'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'}
          name={messageList[i].name}
        />
      );
    }

    return msgList;
  };

  return (
    <ListBox>
      {msgSetting()}
    </ListBox>
  );
};

export default ChatList;

const ListBox = styled(Stack)`
  width: 100%;
  
  height: 90%;
  overflow-y: auto; /* 수직 스크롤을 추가합니다 */
  /* overflow: hidden; */
  margin-top: 6%;
  /* border: 6px solid #decfda99; */
`;
`overflow-y: auto;` 
