import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './components/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<App />}>
            <Route path="/search/:movieId" element={<App />}></Route>
          </Route>

          <Route path="/" element={<Navigate to="/search" replace />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
