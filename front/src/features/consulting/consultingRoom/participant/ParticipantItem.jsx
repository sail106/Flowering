import React from 'react';

import { Grid, Box, styled } from '@mui/material'
import OtherAvatar from '../../../../common/avatar/OtherAvatar';
 
const ParticipantItem = ({
  avatar,
   
  side
}) => {
  return (
    <GridContainer
      container
      justifyContent={side === 'right' ? 'flex-end' : 'flex-start'}
    >
      {side === 'left' && (
        <Grid item sx={{marginRight:"4px"}}>
          <OtherAvatar
            setSize={4}
            imgUrl={avatar}
          />
        </Grid>
      )}
      {/* <Grid item xs={8}>
        <MessageBox side={side}>
          <Message side={side}>{message}</Message>
        </MessageBox>
      </Grid> */}
    </GridContainer>
  );
};

export default ParticipantItem;

ParticipantItem.defaultProps = {
  avatar: '/images/default/avatar20.png',
  // message: '',
  side: 'left',
};

const GridContainer = styled(Grid)({
  width: "100%"
})
 