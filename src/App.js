import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectUserProfile } from "./store/user/selectors";
import { logout } from "./store/user/actions";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const profile = useSelector(selectUserProfile);
  const dispatch = useDispatch();

  console.log("user data in app", profile);
  return (
    <div>
      <div>
        <Link to="/" style={{ marginRight: 20 }}>
          Home
        </Link>
        {profile ? (
          <div>
            <h2>Welcome {profile.name}</h2>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div>
        ) : (
          <div>
            {" "}
            <Link to="/signup" style={{ marginRight: 20 }}>
              Sign Up
            </Link>
            <Link to="/login" style={{ marginRight: 20 }}>
              Login
            </Link>
          </div>
        )}
      </div>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/" component={HomePage} exact />
        <Route path="/post/:id" component={PostPage} />
      </Switch>
    </div>
  );
}
