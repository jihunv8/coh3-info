import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addSquad } from '../../state_store/features/squadSelectorSlice';

import type Squad from '../../game_data/types/Squad';

import americanRaceMark from '../../images/common/race_marks/american.png';
import britishRaceMark from '../../images/common/race_marks/british.png';
import germanRaceMark from '../../images/common/race_marks/german.png';
import afrikaKorpsRaceMark from '../../images/common/race_marks/afrika_korps.png';

type SquadListItemProps = {
  squad: Squad;
};

const SquadListItem = ({
  squad: {
    uniqueName,
    name,
    race,
    imageUrl: { portrait, icon },
  },
}: SquadListItemProps) => {
  const dispatch = useDispatch();

  const raceMarks = {
    us_forces: americanRaceMark,
    british_forces: britishRaceMark,
    wehrmacht: germanRaceMark,
    afrika_korps: afrikaKorpsRaceMark,
  };
  const addSquadToSquadSelector = () => {
    dispatch(addSquad({ uniqueName, name }));
  };

  return (
    <SquadListItemWrapper onClick={addSquadToSquadSelector}>
      <RaceMark>
        <img src={raceMarks[race]} alt={`${race} 마크`} />
      </RaceMark>
      <SquadProtrait>
        <img src={portrait} />
      </SquadProtrait>
      <SquadIcon>
        <img src={icon} alt={`${name} 아이콘`} />
      </SquadIcon>
      <SquadName>{name}</SquadName>
      <SquadType>대보병 / 주력</SquadType>
    </SquadListItemWrapper>
  );
};

export default SquadListItem;

const SquadListItemWrapper = styled.li`
  display: grid;
  grid-template: 1fr / repeat(3, max-content) 1fr max-content;
  align-items: center;
  column-gap: 10px;
  padding: 10px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: solid 1px #c4c4c4;
  }

  &:hover {
    background-color: #dfdfdf;
  }
`;

const ImgContainer = styled.div`
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const RaceMark = styled(ImgContainer)`
  width: 40px;
  height: 40px;
`;

const SquadProtrait = styled(ImgContainer)`
  width: 40px;
  height: 40px;
`;

const SquadIcon = styled(ImgContainer)`
  width: 36px;
  height: 36px;
`;

const SquadName = styled.div``;

const SquadType = styled.div`
  font-size: 0.875rem;
`;
