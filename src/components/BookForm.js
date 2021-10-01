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
    <div className="form-width-2">
      <span className="Title-2 Text-Style-10">
        ADD NEW BOOK
      </span>
      <form onSubmit={addBook}>
        <input type="text" name="bookTitle" className="Lesson-Panel-2" placeholder="Title" onChange={titleUpdate} value={title} />
        <input type="text" name="bookCategory" className="Lesson-Panel-3" placeholder="Category" onChange={categoryUpdate} value={category} />
        <button type="submit" className="Rectangle-4 border-0">ADD BOOK</button>
      </form>
    </div>
  );
}

export default BookForm;
