import { createContext, useContext } from "react";

const booksContext = createContext();
export const useBooksContext = () => useContext(booksContext);

export default booksContext;
