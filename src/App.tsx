import * as React from 'react';
import './App.scss';

import { Contact } from "./page/contact";
import { EducationSlide } from "./page/education";
import { Header } from './page/header';
import { JobsSlide } from "./page/jobs";
import { Projects } from "./page/projects";

class App extends React.Component {
  public render() {
    return (
      <div className="page-parent">
        <Header/>
        <JobsSlide />
        <Projects />
        <EducationSlide />
        <Contact />
      </div>
    );
  }
}

export default App;