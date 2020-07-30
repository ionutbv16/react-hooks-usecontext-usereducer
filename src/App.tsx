import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import BooksState from './context/books/BooksState';

const AppWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  height: 100%;
  background-color: #cccccc;
`;

const App: React.FC = () => (
  <BooksState>
    <BrowserRouter>
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
    </BrowserRouter>
  </BooksState>
);

export default App;
