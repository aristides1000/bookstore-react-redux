import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navbar from './components/Navbar';
import Books from './pages/books';
import Categories from './pages/categories';
import './components/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <div className="Bookstore-CMS">
        <Navbar />
        <Provider store={store}>
          <Switch>
            <Route exact path="/">
              <Books />
            </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
          </Switch>
        </Provider>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
