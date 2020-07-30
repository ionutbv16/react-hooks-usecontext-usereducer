import React from 'react';
import BooksPage from '../BooksPage'; 
import { shallow } from 'enzyme'
import * as BooksContextModule from '../../context/books/booksContext'
import { booksMock } from '../../mocks/mocks'

describe('Test BooksPage Component', () => {
  test('should render without error while mocking useContext', () => {
    const contextValues = booksMock
    jest
      .spyOn(BooksContextModule, 'useBooksContext')
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<BooksPage />);
    expect(wrapper).toMatchSnapshot();
  });
});