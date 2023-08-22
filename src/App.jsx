/* eslint-disable import/no-extraneous-dependencies */
import React, { lazy, Suspense } from 'react';
import './App.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import MainLayout from './layout/MainLayout';
import Toast from './components/Toast';

const Home = lazy(() => import('./pages/Home'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const CreateBlog = lazy(() => import('./pages/CreateBlog'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toast />
      <MainLayout>
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <Suspense fallback={<>...</>}>
                {' '}
                <Home />
              </Suspense>
)}
          />
          <Route
            exact
            path="/create-blog"
            element={(
              <Suspense fallback={<>...</>}>
                {' '}
                <CreateBlog />
              </Suspense>
)}
          />
          <Route
            exact
            path="/blog/:id"
            element={(
              <Suspense fallback={<>...</>}>
                {' '}
                <BlogDetail />
              </Suspense>
)}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
