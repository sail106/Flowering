import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Stack } from '@mui/material';
import ParticipantItem from './ParticipantItem';

const ConsultantParticipantList = () => {


  // useEffect(() => {
    
  //   // 외부 데이터 업데이트 액션 디스패치
  //   dispatch(fetchParticipantList());


  // }, [participantList ]); // participantList가 변경될 때마다 useEffect 실행


  const participantList = useSelector(state => state.consultsessionname.participantList);


  return (
    <ListBox>
      {participantList.map((participant, index) => (
        <ParticipantItem
          key={index}
          avatar={participant.imageUrl}
          side={participant.side ?? 'left'}
          name={participant.name}
          isMic={participant.isMic}
          isCam={participant.isCam}
        />
      ))}
    </ListBox>
  );
};

export default ConsultantParticipantList;

const ListBox = styled(Stack)`
  width: 100%;
  height: 90%;
  overflow-y: auto;
  margin-top: 11px;
`;
