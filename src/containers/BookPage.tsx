import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import BooksContext from '../context/books/booksContext'
import { Title, Wrapper } from '../commonstyled/styled';
import BookDetails from './components/BookDetails';
import BookItem from './components/BookItem';
import { ParamTypes } from '../types';

const ButtonDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 30px;
`;

const BooksWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.87); 
  background-color: #fff;
  padding:20px;
`;

const BooksContainer = styled.div`
`;

const BookPage: React.FC = () => {

  const history = useHistory();
  let params = useParams<ParamTypes>();
  const booksContext = useContext(BooksContext);
  const { loading, books, getBooks } : any = booksContext

  const  booksResults :any = books.books

  if (!booksResults) {
    history.push("/")
    return null
  }
  else {
      const [book] =  (booksResults && booksResults.length > 0) && booksResults.filter( (element: any) => element.id === params.id )
      const { title, author, cover, isbn } = book
      const sameAuthor = (booksResults && booksResults.length > 0) && booksResults.filter( (element: any) => (element.author == author && element.id !== params.id ) )
    
      const renderCards = () => {
        if (sameAuthor && sameAuthor.length > 0) {
           return sameAuthor.map((item:any) => <BookItem history={history}  id={item.id} title={item.title} author={item.author} cover={item.cover} />);
        }
      };

      return (
        <BooksContainer>
          <Wrapper>
            <BooksWrapper>
              <Title>Book Details</Title>
                <BookDetails  title={title} author={author} cover={cover} isbn={isbn} />
              </BooksWrapper>

              <ButtonDivider>
                <Button variant="contained" onClick={() => history.push("/")}>Back  Home</Button>
              </ButtonDivider>
          </Wrapper>

          { sameAuthor && sameAuthor.length > 0  && (
            <Wrapper>
              <BooksWrapper>
              { renderCards()}
              </BooksWrapper>
            </Wrapper>
          )}
        </BooksContainer>
      );
    }
};

export default BookPage
