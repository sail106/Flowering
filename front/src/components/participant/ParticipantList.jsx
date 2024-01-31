import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Stack } from '@mui/material';
import ParticipantItem from './ParticipantItem';

const ParticipantList = () => {
  const participantList = useSelector(state => state.community.participantList);

  return (
    <ListBox>
      {participantList.map((participant, index) => (
        <ParticipantItem
          key={index}
          avatar={participant.imageUrl}
          side={participant.side ?? 'left'}
          name={participant.name}
        />
      ))}
    </ListBox>
  );
};

export default ParticipantList;

const ListBox = styled(Stack)`
  width: 100%;
  height: 90%;
  overflow-y: auto;
  margin-top: 11px;
`;
