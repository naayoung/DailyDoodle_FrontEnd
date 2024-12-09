import React from 'react';
//import styled from 'styled-components';
import StyledBody from '@components/common/StyledBody';

/*
const CropImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 0.8rem;
`;*/
export default function Album() {
  return (
    <>
      <div
        style={{
          color: 'black',
          fontSize: '0.8em',
          margin: '1.5rem 2rem auto',
        }}
      ></div>
      <StyledBody>
        <div style={{ fontSize: '1rem' }}>앨범</div>
        <div className='flex flex-wrap mt-3 justify-start'>
          {/*Array(9)
                        .fill()
                        .map((_, index) => (
                            <div
                                key={index}
                                className="h-24 w-24 border ml-auto mb-3"
                            >
                                ㅇㅇ
                            </div>
                        ))*/}
          {/*crops.images &&
                        crops.images.map((image, index) => (
                            <div
                                key={index}
                                className="h-32 w-32 border mr-auto mb-3"
                            >
                                <CropImage
                                    src={`${baseUrl}/img/${image}`}
                                ></CropImage>
                            </div>
                        ))*/}
        </div>
      </StyledBody>
    </>
  );
}
