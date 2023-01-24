import React from 'react';
import ReactDOM from 'react-dom/client';
import Users from './Users';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Albums from './Albums';
import Photo from './Photo';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Users />} />
        <Route path='/albums' element={<Albums />} />
        <Route path='/albums/photos' element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );