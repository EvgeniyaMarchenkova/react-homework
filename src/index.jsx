import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<App />}>
            <Route path="/search/:searchText" element={<App />}></Route>
          </Route>

          <Route path="/" element={<Navigate to="/search" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
