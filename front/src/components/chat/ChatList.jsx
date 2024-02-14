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
    const { name, role, id, nickname, imageUrl } = useSelector(state => state.auth.logonUser)
    // const { name, role, id, nickname, imageUrl } = useSelector(state => state.auth.logonUser)

    for (; i < messageList.length; i++) {
      // for (; i < 5; i++) {
        console.log('hhhh'+name)
        
      if (messageList[i].name== "bot") {
        console.log('booot')
        msgList.push(
          <ChatItem
            // key={messageList[i].id}
            key={i}
            // avatar={messageList[i].imageUrl}
            avatar={'https://firebasestorage.googleapis.com/v0/b/sail106.appspot.com/o/anon.jpg?alt=media&token=c8378e56-f874-4051-beac-fa925e121143'}
            // side={messageList[i].side ?? 'left'}
            side={'left'}
            message={messageList[i].message}
            name={messageList[i].name}
          />
        );
      }
      else {

        msgList.push(
          <ChatItem
            // key={messageList[i].id}
            key={i}
            // avatar={messageList[i].imageUrl}
            avatar={messageList[i].imageUrl}
            // side={messageList[i].side ?? 'left'}
            side={'left'}
            message={messageList[i].message}
            name={messageList[i].name}
          />
        );

      }
      console.log(messageList[i].message)
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
