import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import RouteWrapper from './router';

import SignIn from '~/pages/SignIn';
import Vehicles from '~/pages/Vehicles';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper exact path="/" component={SignIn} />
        <RouteWrapper exact path="/vehicles" isPrivate component={Vehicles} />
      </Switch>
    </BrowserRouter>
  );
}
