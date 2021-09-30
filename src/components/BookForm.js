import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBook } from '../redux/books/books';

function BookForm() {
  const dispatch = useDispatch();
  const createBookAction = bindActionCreators(createBook, dispatch);

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const AuthorUpdate = (e) => setAuthor(e.target.value);
  const titleUpdate = (e) => setTitle(e.target.value);

  const addBook = (e) => {
    e.preventDefault();
    if (title && author) {
      createBookAction({
        title,
        author,
      });
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={addBook} className="w-50">
      <div className="mb-3">
        <input type="text" name="bookTitle" className="form-control" placeholder="Title" onChange={titleUpdate} value={title} />
      </div>
      <div className="mb-3">
        <input type="text" name="bookAuthor" className="form-control" placeholder="Author" onChange={AuthorUpdate} value={author} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default BookForm;
