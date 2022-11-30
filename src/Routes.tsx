import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
const Routes = () => {
  return (
    <ReactRoutes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/quiz'} element={<Quiz />} />
    </ReactRoutes>
  );
};

export default Routes;
