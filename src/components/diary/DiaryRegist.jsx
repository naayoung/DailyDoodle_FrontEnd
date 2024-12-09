import React from 'react';
import styled from 'styled-components';
import FullButton from '@components/common/indexCommon';

const StyledContainer = styled.div`
  background-color: #f9f7c9;
  padding: 0.5rem 1.5rem;
  min-height: 30em;
`;
const Content = styled.div`
  background-color: white;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
  padding: 1rem; /* 추가: 내부 여백 설정 */

  textarea {
    width: 100%;
    min-height: 16rem;
    border: none;
    resize: none; /* 리사이즈 비활성화 */
    outline: none; /* 포커스 효과 제거 */
  }
`;

const DiaryRegist = () => {
  return (
    <>
      <StyledContainer>
        <div>
          <textarea placeholder='' />
        </div>
        <Content>
          <textarea placeholder='오늘은 어땠나요?' />
        </Content>
      </StyledContainer>
      <FullButton name='등록하기' onClick={'##'}></FullButton>
    </>
  );
};
export default DiaryRegist;
