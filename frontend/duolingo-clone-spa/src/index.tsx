import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css";
import App from './App';
import Learn from './routes/Learn';
import Profile from './routes/Profile';
import Settings from './routes/Settings';
import ErrorPage from './components/ErrorPage';
import Lesson from './routes/Lesson';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Learn /> },
          {path: "/lesson/:lessonId", element: <Lesson />},
          { path: "/profile", element: <Profile /> },
          { path: "/settings", element: <Settings /> }
        ]
      }
    ]
  }]

);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

