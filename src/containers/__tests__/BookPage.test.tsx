import React from 'react';
import BookPage from '../BookPage'; 
import { shallow } from 'enzyme'
import * as BooksContextModule from '../../context/books/booksContext'
import { booksMock } from '../../mocks/mocks'
import { MemoryRouter } from 'react-router';

describe('Test BookPage Component', () => {
  test('should render without error while mocking useContext', () => {
    const contextValues = booksMock
    jest
      .spyOn(BooksContextModule, 'useBooksContext')
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<MemoryRouter><BookPage /></MemoryRouter>);
    expect(wrapper).toMatchSnapshot();
  });
});