import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import SignupPage from "./pages/SignupPage";

export default function App() {
  return (
    <div>
      <div>
        <Link to="/signup">Sign Up</Link>
      </div>
      <Switch>
        <Route path="/signup" component={SignupPage} />
        <Route path="/" component={HomePage} exact />
        <Route path="/post/:id" component={PostPage} />
      </Switch>
    </div>
  );
}
