import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
const Routes = () => {
  return (
    <ReactRoutes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/quiz'} element={<Quiz />} />
      <Route path={'/result'} element={<Result />} />
    </ReactRoutes>
  );
};

export default Routes;
