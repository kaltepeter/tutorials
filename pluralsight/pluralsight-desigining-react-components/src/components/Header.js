import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import withAuth from "./withAuth";

const Header = ({ loggedInUser, setLoggedInUser }) => {
    const {theme} = useContext(ThemeContext);

    const LoggedIn = ({loggedInUser, setLoggedInUser}) => {
        return (
            <div>
              <span>Logged in as {loggedInUser}</span>
              <button className="btn btn-secondary" onClick={() => {
                  setLoggedInUser('');
              }}>
                  Logout
              </button>
            </div>
        );
    };

    const NotLoggedIn = ({setLoggedInUser}) => {
        return (
              <button className="btn btn-secondary" onClick={(e) => {
                  e.preventDefault();
                  const username = window.prompt("Enter login name: ", "");
                  setLoggedInUser(username);
              }}>
                  Login
              </button>
        );
    };

    return (
        <div className="padT4 padB4">
            <div className="container mobile-container">
                <div className="d-flex justify-content-between">
                    <div>
                        <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
                    </div>
                    <div className="light">
                        <h4 className="header-title">Silicon Valley Code Camp</h4>
                    </div>
                    <div className={
                        theme === 'light' ? "" : "text-info"
                    }>
                        {loggedInUser && loggedInUser.length > 0 ?
                        <LoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} /> : 
                        <NotLoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} /> 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(Header);