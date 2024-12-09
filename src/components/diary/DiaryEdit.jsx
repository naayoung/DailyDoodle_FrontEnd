import React from 'react';
import styled from 'styled-components';
import FullButton from '@components/common/FullButton';

const StyledContainer = styled.div`
  background-color: #f9f7c9;
  padding: 0.5rem 1.5rem;
  min-height: 30em;
`;
const Picture = styled.img`
  background-color: #d9d9d9;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
  height: 25rem;
  width: 100%;
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

const DiaryEdit = () => {
  return (
    <>
      <StyledContainer>
        <div>
          <textarea placeholder='' />
        </div>
        <Picture />
        <Content>
          <textarea placeholder='내용을 작성해주세요 :D' />
        </Content>
      </StyledContainer>
      <FullButton name='수정하기' onClick={'##'} />
    </>
  );
};
export default DiaryEdit;
