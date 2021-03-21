import React, { FC } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { token } from './static'
import Registration from './pages/Registration/Registration'

const App: FC = () => {
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
          <Route
            exact
            path="/"
            render={() => privateRoute(<div>authorized</div>)}
          />
          <Route path="/registration" component={Registration} />
          <Route path="/auth" render={() => <div>auth</div>} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
