import React, { FC } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { token } from './static'
import Registration from './pages/Registration/Registration'
import Confirmation from './pages/Confirmation/Confirmation'
import Login from './pages/Login/Login'
import Dialog from './pages/Dialog/Dialog'
import Users from './pages/Users/Users'

const App: FC = () => {
  // TODO исправить типизацию
  const privateRoute = (page: any) => {
    if (localStorage.getItem(token)) {
      return page
    } else {
      return <Redirect to="/login" />
    }
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/confirm/:verificationToken" component={Confirmation} />
          <Route
            exact
            path="/chat/:chatId"
            render={() => privateRoute(<Dialog />)}
          />
          <Route exact path="/users" render={() => privateRoute(<Users />)} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
