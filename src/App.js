import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div>
      <div>
        <Link to="/" style={{ marginRight: 20 }}>
          Home
        </Link>
        <Link to="/signup" style={{ marginRight: 20 }}>
          Sign Up
        </Link>
        <Link to="/login" style={{ marginRight: 20 }}>
          Login
        </Link>
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
