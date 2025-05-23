import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import { Helmet } from 'react-helmet-async';
import './index.css';

function App() {
  return (
    <>
      <Helmet>
        <title>Beauvapps - Description Generator for Shopify</title>
        <meta name="description" content="Boost your Shopify store's sales with our AI-powered product description generator app." />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
    </>
  );
}

export default App;