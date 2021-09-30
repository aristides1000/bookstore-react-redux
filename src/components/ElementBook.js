import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { removeBook } from '../redux/books/books';

function ElementBook({ title, category, bookId }) {
  const dispatch = useDispatch();
  const removeBookAction = bindActionCreators(removeBook, dispatch);
  return (
    <div className="d-flex justify-content-between mt-2">
      <span className="d-flex align-items-center">
        {'category: '}
        {category}
        {' '}
        {'Title: '}
        {title}
      </span>
      <button type="button" className="ms-3 btn btn-danger" onClick={() => removeBookAction(bookId)}>Delete</button>
    </div>
  );
}

ElementBook.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default ElementBook;
