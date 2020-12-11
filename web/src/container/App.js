import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import Login from './Login/Login'

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/' component={Home} />
      </Switch>
    </Fragment>
  )
}

export default App
