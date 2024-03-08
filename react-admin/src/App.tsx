import React from 'react';
import Users from './pages/Users';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Login from './pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Users />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
