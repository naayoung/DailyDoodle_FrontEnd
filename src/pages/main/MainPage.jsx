import { useEffect } from 'react';

const MainPage = () => {
  useEffect(() => {
    console.log('MainPage가 렌더링되었습니다.');
  }, []);

  return <div>Main Page</div>;
};

export default MainPage;
