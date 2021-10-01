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
      <div className="row panel-bg-books pb-5 mb-0 me-0">
        <div className="col-12 d-flex flex-column align-items-center pt-5">
          <ul className="d-flex flex-column align-items-center px-0">
            {Object.keys(books).map((id) => (
              <li key={id} className="li-item">
                <ElementBook
                  title={books[id][0].title}
                  category={books[id][0].category}
                  bookId={id}
                />
              </li>
            ))}
            <li className="border-bottom width-books-li mt-3 form-width" />
          </ul>
          <BookForm />
        </div>
      </div>
    </div>
  );
};

export default Books;
