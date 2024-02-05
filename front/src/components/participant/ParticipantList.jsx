import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Stack } from '@mui/material';
import ParticipantItem from './ParticipantItem';

// import { fetchParticipantList } from '../../store/consultSlice';  

const ParticipantList = () => {
  const dispatch = useDispatch();

  const participantList = useSelector(state => state.community.participantList);


  // useEffect(() => {
  //   // 컴포넌트가 마운트되거나 participantList가 변경될 때마다 participantList를 가져옴
  //   dispatch(fetchParticipantList());
  // }, [dispatch]);

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
