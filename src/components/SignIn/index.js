import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { SIGN_UP, HOME } from '../../constants/routes'
import { withFirebase } from '../Firebase'
import { Input, Button, SectionPaper } from '../global-styled-components'
import StyledSignInPage from './style'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: ''
}

const SignInPage = () => (
  <StyledSignInPage>
    <SectionPaper>
      <h3>Sign In</h3>
      <SignInForm />
      <SignUpLink />
    </SectionPaper>
  </StyledSignInPage>
)

class SignInFormBase extends Component {
  constructor (props) {
    super(props)
    this.state = INITIAL_STATE
  }

  onSubmit (event) {
    const { email, password } = this.state

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push(HOME)
      })
      .catch(error => this.setState({ error: error }))

    event.preventDefault()
  }

  onChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const { email, password, error } = this.state

    return (
      <form onSubmit={event => this.onSubmit(event)}>
        <Input
          name='email'
          type='text'
          onChange={event => this.onChange(event)}
          value={email}
          placeholder='Email address'
        />
        <Input
          name='password'
          type='password'
          onChange={event => this.onChange(event)}
          value={password}
          placeholder={'Password'}
        />
        <Button type='submit'>Sign In</Button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase)

const SignUpLink = () => {
  return (
    <p>
      Don't have an account? <Link to={SIGN_UP}>Register</Link>
    </p>
  )
}

export default SignInPage
