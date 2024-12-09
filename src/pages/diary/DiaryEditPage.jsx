import React from 'react';
import styled from 'styled-components';
import { DiaryDetailTitle, DiaryEdit } from '@components/diary/indexDiary';

const StyledContainer = styled.div`
  color: black;
  font-size: 0.8em;
  margin: auto 1.5rem auto;
  margin-top: 2rem;
`;

const DiaryEditPage = () => {
  return (
    <>
      <StyledContainer>
        <DiaryDetailTitle />
      </StyledContainer>
      <DiaryEdit />
    </>
  );
};
export default DiaryEditPage;
