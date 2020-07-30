import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Loading from './components/Loading';
import { useBooksContext } from '../context/books/booksContext'
import { Wrapper } from '../commonstyled/styled';
import BookItem from './components/BookItem';
import { IBooks } from '../types';

const BooksWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.87); 
  background-color: #fff;
  padding:20px;
  width: 80%;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
`;

const BooksPage: React.FC<RouteComponentProps> = ({ history }) => {

  const booksContext = useBooksContext();
  const { loading, books, getBooks } : any = booksContext

  useEffect(() => {
    getBooks();
  }, []);

  const renderCards = () => {
    const booksResults : IBooks[] = books.books
    if ( booksResults && booksResults.length ) {
       return booksResults.map((item:IBooks) => <BookItem history={history} id={item.id} title={item.title} author={item.author} cover={item.cover} />);
    }
  };
  
  return (
    <Wrapper>
      <BooksWrapper>
        {loading ? <Loading /> : renderCards()}
      </BooksWrapper>
    </Wrapper>
  );
  
};

export default withRouter(BooksPage);
