import React from 'react';

import UserProfile from "./components/AccountUser";
import Navbar from "./components/Navbar";


import {Container} from "semantic-ui-react";
import {Switch, Route} from "react-router-dom";

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>}/>
        <Route exact path="/account/user" render={() => <UserProfile />} />
      </Switch>
    </Container>
  </>
)

export default App;
