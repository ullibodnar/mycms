import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AccountPage from '../Account'
import AdminPage from '../Admin'
import HomePage from '../Home'
import LandingPage from '../Landing'
import PasswordForgetPage from '../PasswordForget'
import SignInPage from '../SignIn'
import SignUpPage from '../SignUp'

import {
  ACCOUNT,
  ADMIN,
  HOME,
  LANDING,
  PASSWORD_FORGET,
  SIGN_IN,
  SIGN_UP
} from '../../constants/routes'

import { APP_NAME } from '../../constants/text'

const App = () => (
  <Router>
    <Fragment>
      <Route exact path={LANDING} component={LandingPage} />
      <Route path={SIGN_UP} component={SignUpPage} />
      <Route path={SIGN_IN} component={SignInPage} />
      <Route path={PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={HOME} component={HomePage} />
      <Route path={ACCOUNT} component={AccountPage} />
      <Route path={ADMIN} component={AdminPage} />
    </Fragment>
  </Router>
)

export default App
