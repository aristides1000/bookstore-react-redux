import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row panel-bg border-bottom mx-0">
        <nav className="col-12 d-flex align-items-center px-0">
          <div className="Bookstore-CMS-typo d-flex">
            <span className="pe-2">Bookstore</span>
            <span>CMS</span>
          </div>
          <div className="d-flex justify-content-between align-items-center w-100">
            <ul className="d-flex align-items-center mb-0">
              {links.map((link) => (
                <li key={link.id} className="li-item">
                  <NavLink
                    to={link.path}
                    className="NavLinks Text-Style-7"
                    activeClassName="active-link Text-Style-7"
                    exact
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="Oval d-flex align-content-center justify-content-center">
              <ImUser />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
