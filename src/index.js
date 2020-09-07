import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './assets/styles/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './views/pages/Home.js';
import { Helmet } from 'react-helmet';
import { ThemeContext, themes } from './views/themes/theme-context.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const App = () => {
  const [theme, toggleTheme] = useState(themes.light);
  const value = { theme, toggleTheme };

  return (
    <>
      <Helmet>
        <style>
          {'body { background-color: #' + theme.background_color + '; }'}
        </style>
      </Helmet>
      <ThemeContext.Provider value={value}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} />} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
