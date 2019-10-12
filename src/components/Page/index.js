// == Import : npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import : local
import About from 'src/components/About';
import Categories from 'src/components/Categories';
import Contact from 'src/components/Contact';
import Error404 from 'src/components/Error404';
import HomePage from 'src/components/HomePage';

// == Composant
const Page = () => (
  <div id="app">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={Error404} />
    </Switch>
  </div>
);

// == Export
export default Page;
