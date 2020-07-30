import React, { useReducer } from "react";
import axios from "axios";
import BooksContext from "./booksContext";
import BooksReducer from "./booksReducer";
import { GET_BOOKS, SET_LOADING } from "./types";
import { URL_FETCH } from "../../config";

const BooksState = (props) => {
  const initialState = {
    books: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(BooksReducer, initialState);

  const getBooks = async () => {
    setLoading();
    const res = await axios.get(URL_FETCH);
    dispatch({
      type: GET_BOOKS,
      payload: res.data,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <BooksContext.Provider
      value={{
        books: state.books,
        loading: state.loading,
        getBooks,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksState;
