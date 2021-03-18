import React from "react";
import "./App.css";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectUserProfile } from "./store/user/selectors";
import { logout } from "./store/user/actions";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CreatePostPage from "./pages/CreatePostPage";

export default function App() {
  const userData = useSelector(selectUserProfile);
  const dispatch = useDispatch();

  const protectedRoutes = (Component, routerProps) => {
    const token = userData.token;
    return token ? <Component {...routerProps} /> : <Redirect to="/login" />;
  };

  console.log("user data in app", userData.profile);
  return (
    <div>
      <div>
        <Link to="/" style={{ marginRight: 10 }}>
          Home
        </Link>
        {userData.profile ? (
          <div>
            <Link to="/create" style={{ marginRight: 10 }}>
              Create
            </Link>
            <span>Welcome {userData.profile.name}</span>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div>
        ) : (
          <div>
            {" "}
            <Link to="/signup" style={{ marginRight: 10 }}>
              Sign Up
            </Link>
            <Link to="/login" style={{ marginRight: 10 }}>
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
        <Route
          path="/create"
          render={(routerProps) => protectedRoutes(CreatePostPage, routerProps)}
        />
      </Switch>
    </div>
  );
}
