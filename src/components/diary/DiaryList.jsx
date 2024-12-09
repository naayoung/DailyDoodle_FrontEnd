import styled from 'styled-components';
import DiaryListDetail from '@components/diary/DiaryListDetail';

const StyledContainer = styled.div`
  background-color: #f9f7c9;
  padding: 0.5rem 1.5rem;
  min-height: 30em;
`;

const DiaryList = () => {
  return (
    <>
      <StyledContainer>
        <DiaryListDetail />
        {/* diaryList가 비어있으면 regist 링크를, 비어있지 않으면 edit 링크를 표시
        {diaryList && diaryList.length > 0 ? (
          <Link
            to={`list/${diaryList[0].diaryNo}`}
            state={{ memberNo, cropNo, baseUrl }}
          >
            <FloatingButton />
          </Link>
        ) : (
          <Link
            to={`regist/${formattedDiaryDate}`}
            state={{ memberNo, cropNo, baseUrl }}
          >
            <FloatingButton />
          </Link>
        )}
        */}
      </StyledContainer>
      {console.log('diaryList:', diaryList)}
    </>
  );
};
export default DiaryList;
