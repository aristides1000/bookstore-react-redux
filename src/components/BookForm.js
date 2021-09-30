import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBook } from '../redux/books/books';

function BookForm() {
  const dispatch = useDispatch();
  const createBookAction = bindActionCreators(createBook, dispatch);

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');

  const categoryUpdate = (e) => setCategory(e.target.value);
  const titleUpdate = (e) => setTitle(e.target.value);

  const addBook = (e) => {
    e.preventDefault();
    if (title && category) {
      createBookAction({
        title,
        category,
      });
      setTitle('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={addBook} className="w-50">
      <div className="mb-3">
        <input type="text" name="bookTitle" className="form-control" placeholder="Title" onChange={titleUpdate} value={title} />
      </div>
      <div className="mb-3">
        <input type="text" name="bookCategory" className="form-control" placeholder="Category" onChange={categoryUpdate} value={category} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default BookForm;
