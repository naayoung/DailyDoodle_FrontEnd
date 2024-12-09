import { Link } from 'react-router-dom';
import { TfiPencil } from 'react-icons/tfi';
import { RiDeleteBinLine } from 'react-icons/ri';
import styled from 'styled-components';
import DiaryBlank from '@components/diary/DiaryBlank';
import ResultModal from '@components/modal/ResultModal';

const StyledContainer = styled.div`
  background-color: white;
  font-size: 0.8em;
  border-radius: 0.8rem;
  padding: 1.3rem;
  margin: 1.3rem auto;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const Picture = styled.img`
  background-color: #d9d9d9;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
  height: 20rem;
  width: 100%;
`;
const Height = styled.div`
  height: 30em;
  display: flex;
  align-items: center;
`;

const DiaryListDetail = () => {
  const marginContent = {
    margin: '0 0.5rem 0.5rem',
  };
  const image = {
    margin: 'auto 0.1rem',
  };

  return (
    <>
      {/*diaryList && diaryList.length > 0 ? (
        diaryList.map((diary, index) => (
          <div key={'index' + index}>
            <StyledContainer>
              <Picture
                src={`${baseUrl}/img/DIARY/${diary[3].fileSrc}.${diary[3].fileExtension}`}
              />
              <FlexRow style={marginContent}>
                <FlexRow style={{ fontWeight: 'bold' }}>
                  <div>{new Date(diary[0].diaryDate).toLocaleDateString()}</div>
                  <div>
                    ({diary[0].dateDifferenceInDays}
                    일차)
                  </div>
                </FlexRow>
                <FlexRow style={{ marginLeft: 'auto' }}>
                  <div className='d-flex justify-content-end'>
                    <FaCircle color='#F97777' style={image} />
                    <div>{diary[1].thomer}°C</div>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <FaCircle color='#BACCFD' style={image} />
                    <div>{diary[1].soilHumid}%</div>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <FaCircle color='#FCC9A7' style={image} />
                    <div>{diary[1].lumen}lx</div>
                  </div>
                </FlexRow>
              </FlexRow>
              {/*내용*/}
              <div className='content' style={marginContent}>
                {diary[0].content}
              </div>
              <FlexRow
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                <Link
                  to={`list/${diary[0].diaryNo}`}
                  state={{ memberNo, cropNo, baseUrl }}
                >
                  <TfiPencil />
                </Link>
                <button onClick={() => handleDeleteClick(diary[0].diaryNo)}>
                  <RiDeleteBinLine />
                </button>
              </FlexRow>
            </StyledContainer>
          </div>
        ))
      ) : (
        <Height>
          <DiaryBlank />
        </Height>
      )/*}
      {/*resultMessage && (
        <ResultModal
          title={resultMessage.title}
          content={resultMessage.content}
          callbackFnc={closeModal}
        />
      )*/}
    </>
  );
};
export default DiaryListDetail;
