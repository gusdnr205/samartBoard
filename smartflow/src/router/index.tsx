// index.tsx
import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/Home';
import Lotto from '@pages/Lotto';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/lotto',
    element: <Lotto />,
  },
]);
