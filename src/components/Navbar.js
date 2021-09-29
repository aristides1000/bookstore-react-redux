import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-12 d-flex">
          <h1>Bookstore</h1>
          <ul className="d-flex">
            {links.map((link) => (
              <li key={link.id} className="li-item me-2">
                <NavLink
                  to={link.path}
                  activeClassName="active-link"
                  exact
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
