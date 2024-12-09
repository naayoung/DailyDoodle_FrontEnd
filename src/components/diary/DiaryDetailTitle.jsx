import React from 'react';
import styled from 'styled-components';

import TitleDivisionLine from '@components/common/TitleDivisionLine';

export default function DiaryDetailTitle() {
  const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
  `;
  return (
    <>
      <div>
        <FlexRow style={{ fontWeight: '700', margin: '0.5rem' }}>
          <div>날짜날짜날짜</div>
        </FlexRow>
      </div>
      <TitleDivisionLine />
    </>
  );
}
