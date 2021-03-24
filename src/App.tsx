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

const App: FC = () => {
  // TODO исправить типизацию
  const privateRoute = (page: any) => {
    if (localStorage.getItem(token)) {
      return page
    } else {
      return <Redirect to="/auth" />
    }
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/confirm/:verificationToken" component={Confirmation} />
          <Route
            exact
            path="/"
            render={() => privateRoute(<div>authorized</div>)}
          />
          <Route path="/auth" render={() => <div>auth</div>} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
