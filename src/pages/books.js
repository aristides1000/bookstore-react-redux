import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  loadBooks, createBook,
} from '../redux/books/books';
import ElementBook from '../components/ElementBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const loadBooksAction = bindActionCreators(loadBooks, dispatch);
  const createBookAction = bindActionCreators(createBook, dispatch);

  useEffect(() => {
    loadBooksAction();
    return null;
  }, []);

  const bookCreate = {
    author: 'Robert Greene',
    title: 'Mastery',
  };

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
          <form className="w-50">
            <div className="mb-3">
              <input type="text" name="bookAuthor" className="form-control" placeholder="Author" />
            </div>
            <div className="mb-3">
              <input type="text" name="bookTitle" className="form-control" placeholder="Title" />
            </div>
            <button
              onClick={
                (e) => {
                  e.preventDefault();
                  createBookAction(bookCreate);
                }
              }
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Books;
