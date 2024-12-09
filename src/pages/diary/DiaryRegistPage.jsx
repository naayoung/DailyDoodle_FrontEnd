import React from 'react';

import styled from 'styled-components';
import { DiaryDetailTitle, DiaryRegist } from '@components/diary/indexDiary';

const StyledContainer = styled.div`
  color: black;
  font-size: 0.8em;
  margin: auto 1.5rem auto;
  margin-top: 2rem;
`;

const DiaryRegistPage = () => {
  return (
    <>
      <StyledContainer>
        <DiaryDetailTitle />
      </StyledContainer>
      <DiaryRegist />
    </>
  );
};
export default DiaryRegistPage;
