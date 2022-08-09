import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import ContextWrapper from "@components/ContextWrapper";

function App() {
  return (
      <Router>
          <ContextWrapper>
              <Main/>
          </ContextWrapper>
      </Router>
  );
}

export default App;
