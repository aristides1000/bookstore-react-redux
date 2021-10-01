import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { removeBook } from '../redux/books/books';

function ElementBook({ title, category, bookId }) {
  const dispatch = useDispatch();
  const removeBookAction = bindActionCreators(removeBook, dispatch);
  return (
    <div className="d-flex justify-content-between mt-2 Lesson-Panel mb-2">
      <div className="Lesson-Panel-Title">
        <div className="School-of">
          {category}
        </div>
        <div className="Title Text-Style-6">
          {title}
        </div>
        <div className="Author-Name">
          John Doe
        </div>
        <ul className="d-flex li-item ps-0 pt-4">
          <li className="border-end">
            <button type="button" className="Book-Options border-0 bg-transparent">
              Comments
            </button>
          </li>
          <li className="border-end">
            <button
              type="button"
              className="Book-Options border-0 bg-transparent"
              onClick={() => removeBookAction(bookId)}
            >
              Remove
            </button>
          </li>
          <li>
            <button type="button" className="Book-Options border-0 bg-transparent">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="d-flex align-items-center border-end">
        <svg viewBox="0 0 36 36" className="sketch-circular">
          <path
            className="curve-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="curve"
            strokeDasharray="64, 100"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div>
          <div className="-Percent-Complete">
            64%
          </div>
          <span className="Completed Text-Style-9">
            Completed
          </span>
        </div>
      </div>
      <div className="d-flex flex-column">
        <span className="Current-Chapter">
          Current Chapter
        </span>
        <span className="Current-Lesson">
          Chapter3: &quot;LessonLearned&quot;
        </span>
        <div className="Rectangle-2 text-uppercase">
          Update progress
        </div>
      </div>
    </div>
  );
}

ElementBook.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default ElementBook;
