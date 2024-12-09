import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoadingModal from '@components/modal/LoadingModal.jsx';

const Loading = <LoadingModal />;

// 레이아웃
const Layout = lazy(() => import('@layouts/Layout.jsx'));
// 메인페이지
const MainPage = lazy(() => import('@pages/main/MainPage.jsx'));

const root = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={Loading}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: '',
        element: <MainPage />,
      },
    ],
  },
]);

export default root;
