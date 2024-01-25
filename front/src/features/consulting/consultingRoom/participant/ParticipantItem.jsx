import React from 'react';
import styled from 'styled-components';
import { Grid, Box } from '@mui/material'
import OtherAvatar from '../../../../common/avatar/OtherAvatar';
import { CiMicrophoneOff } from "react-icons/ci";
import { BsCameraVideoOff } from "react-icons/bs";

const ParticipantItem = ({
  avatar,
  side,
  name
}) => {
  return (
    <GridContainer container alignItems="center">
      <Grid item xs={8}>
        <NameBox side={side}>
          {side === 'left' && (
            <OtherAvatar
              setSize={4}
              imgUrl={avatar}
            />
          )}
          <Name side={side}>{name}</Name>

          <CiMicrophoneOff style={{ marginLeft: '10px'  }} />
          <BsCameraVideoOff style={{ marginLeft: '10px'  }} />

        </NameBox>
      </Grid>
    </GridContainer>
  );
};

export default ParticipantItem;

ParticipantItem.defaultProps = {
  avatar: '/images/default/avatar20.png',
  side: 'left',
};

const GridContainer = styled(Grid)({
  width: "100%",
});

const Name = styled('p')((props) => ({
  color: (props.side === "right" ? "#5A4D4D" : "#55608E"),
  fontSize: '1rem',
  fontWeight: 'bold',
  marginLeft: '13px',
}))

const NameBox = styled(Box)((props) => ({
  backgroundColor: ("#FFFFFF"),
  padding: "0.4rem 1rem",
  borderRadius: "31.5px",
  display: "flex",
  alignItems: "center",
  width: '99%',
  marginBottom: '4%',
  overflowY: 'auto', /* 수직 스크롤을 추가합니다 */

}))
