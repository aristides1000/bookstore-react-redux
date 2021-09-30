import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBooks } from '../redux/books/books';
import ElementBook from '../components/ElementBook';
import BookForm from '../components/BookForm';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const loadBooksAction = bindActionCreators(loadBooks, dispatch);

  useEffect(() => {
    loadBooksAction();
    return null;
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center">
          <ul>
            {books.map((book) => (
              <li key={book.id} className="li-item">
                <ElementBook title={book.title} author={book.author} bookId={book.id} />
              </li>
            ))}
          </ul>
          <BookForm />
        </div>
      </div>
    </div>
  );
};

export default Books;
