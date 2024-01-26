import React from 'react';

import { Grid, Box, styled } from '@mui/material'
import OtherAvatar from '../../../../components/avatar/OtherAvatar';

const ChatItem = ({
  avatar,
  message,
  side,
  name,
  date,
  
}) => {
  return (
    <GridContainer
      container
      justifyContent={side === 'right' ? 'flex-end' : 'flex-start'}
    >
      {side === 'left' && (
        <Grid item sx={{ marginRight: "4px" }}>
          <OtherAvatar
            setSize={4}
            imgUrl={avatar}
          />
        </Grid>
      )}

      <Grid item xs={8}>
        <MessageBox side={side}>
          <Name>{name}</Name>
          <Message side={side}>{message}</Message>
        </MessageBox>
      </Grid>

    </GridContainer>
  );
};

export default ChatItem;

ChatItem.defaultProps = {
  avatar: '/images/default/avatar20.png',
  message: '',
  side: 'left',
};

const GridContainer = styled(Grid)({
  width: "100%",
  marginBottom: '6%',
  
})

const MessageBox = styled(Box)((props) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: (props.side === 'left' ? "#FFFFFF" : "#F5A8BA"),
  padding: "0.4rem 1rem",
  borderRadius: "1rem",
  height: 'auto', // 자동으로 크기 조절

}))

const Message = styled('p')((props) => ({
  color: (props.side === "right" ? "#5A4D4D" : "#55608E"),
  fontSize: '1rem',
  fontWeight: 'bold',

  flex: '1', // flex-grow: 1; 설정
  overflowWrap: 'break-word', // 긴 단어 자동 줄 바꿈
  wordBreak: 'break-word', // 긴 단어 자동 줄 바꿈
}))

const Name = styled('p')({
  fontSize : '11px' 
})