import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import Header from "./common/Header";
import ManageCoursePage from "./ManageCoursePage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
