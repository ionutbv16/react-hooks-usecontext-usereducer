import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BooksPage from './containers/BooksPage';
import BookPage from './containers/BookPage';

const AppRouter: React.FC = () => (
  <Switch>
    <Route path="/" exact component={BooksPage} />
    <Route path="/book/:id" exact component={BookPage} />
  </Switch>
);

export default AppRouter;
