import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  SelectButton,
  TitleDivisionLine,
} from '@components/common/indexCommon';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 0.2rem 0.3rem auto;
`;

export default function DiaryTitle() {
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    navigate(path, { state: { memberNo, cropNo } });
  };

  const location = useLocation();
  const isCalendarPage = location.pathname === '/diary/calendar';
  const isDiaryPage = location.pathname === '/diary';
  const isAlbumPage = location.pathname === '/diary/album';

  const sharedColor = '#C4C4C4';

  const diaryButtonStyle = {
    backgroundColor: isDiaryPage ? '#90C8AC' : sharedColor,
    hoverBackgroundColor: isDiaryPage ? '#C4DFAA' : '#C4DFAA',
  };

  const calendarButtonStyle = {
    backgroundColor: isCalendarPage ? '#90C8AC' : sharedColor,
    hoverBackgroundColor: isCalendarPage ? '#C4DFAA' : '#C4DFAA',
  };

  const albumButtonStyle = {
    backgroundColor: isAlbumPage ? '#90C8AC' : sharedColor,
    hoverBackgroundColor: isAlbumPage ? '#C4DFAA' : '#C4DFAA',
  };

  return (
    <>
      <div key={index}>
        {/*제목 및 버튼*/}
        <FlexRow>
          <FlexRow style={{ marginLeft: 'auto' }}>
            <SelectButton
              name='다이어리'
              backgroundColor={diaryButtonStyle.backgroundColor}
              hoverBackgroundColor={diaryButtonStyle.hoverBackgroundColor}
              onClick={() => handleButtonClick('/diary')}
            />
            <SelectButton
              name='앨범'
              backgroundColor={albumButtonStyle.backgroundColor}
              hoverBackgroundColor={albumButtonStyle.hoverBackgroundColor}
              onClick={() => handleButtonClick('/diary/album')}
            />
          </FlexRow>
        </FlexRow>
        <TitleDivisionLine />
      </div>
    </>
  );
}
