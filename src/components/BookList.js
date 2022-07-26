import { nanoid } from "nanoid";
const BookList = ({ books }) => {
  const allBooks = books.map((book) => {
    return (
      <tr key={nanoid()}>
        <td>{book.title}</td>
        <td>{book.author}</td>
      </tr>
    );
  });
  return allBooks;
};

export default BookList;
