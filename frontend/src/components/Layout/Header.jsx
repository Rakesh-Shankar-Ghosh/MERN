import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import SearchInput from "../Form/SearchInput"

const Header = () => {
  const [auth, setAuth] = useAuth();

  const logouthandle = () => {
    setAuth({
      ...auth,
      user: null,
      token: null,
    });
    localStorage.removeItem("auth");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand" href="#">
          Hiden
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <SearchInput />
            <li className="nav-item active">
              <NavLink to="/" className="nav-link" href="#">
                Home <span className="sr-only"></span>
              </NavLink>
            </li>

            <li className="nav-item active">
              <NavLink to="/category" className="nav-link" href="#">
                Category <span className="sr-only"></span>
              </NavLink>
            </li>

            {!auth.user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/Register" className="nav-link" href="#">
                    Regster
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Login" className="nav-link" href="#">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{ border: "none" }}
                  >
                    {auth?.user?.name}
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to={`/dashbord/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                        className="dropdown-item"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={logouthandle}
                        to="/login"
                        className="dropdown-item"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink to="/cart" className="nav-link" href="#">
                Cart(0)
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
