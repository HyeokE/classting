import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Review from './pages/Review';
import ReviewDetail from './pages/ReviewDetail';
const Routes = () => {
  return (
    <ReactRoutes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/quiz/:id'} element={<Quiz />} />
      <Route path={'/result'} element={<Result />} />
      <Route path={'/review'} element={<Review />} />
      <Route path={'/review/:id'} element={<ReviewDetail />} />
    </ReactRoutes>
  );
};

export default Routes;
