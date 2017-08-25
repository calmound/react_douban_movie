import React from 'react';
import {render} from 'react-dom';
import Index from './components/Index/index';
import Detail from "./components/Detail/index";
import {Switch,HashRouter,Route,hashHistory,BrowserRouter} from 'react-router-dom';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/detail/:id" component={Detail} />
    </Switch>
  </HashRouter>
  ,document.getElementById('root'))
