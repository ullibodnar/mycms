import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { SIGN_IN, HOME, LANDING } from '../../constants/routes'
import { withFirebase } from '../Firebase'

const SignUpPage = () => (
  <div>
    <h3>Sign Up</h3>
    <SignUpForm />

    <p>
      Already have an account? <Link to={SIGN_IN}>Sign in</Link>.
    </p>
  </div>
)

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  isLoading: false
}

class SignUpFormBase extends Component {
  constructor (props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state

    this.setState({ isLoading: true })

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        alert('success!')
        this.props.history.push(LANDING)
      })
      .catch(error => {
        this.setState({ error, isLoading: false })
      })

    event.preventDefault()
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const { username, email, passwordOne, passwordTwo, error } = this.state

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='username'
          value={username}
          onChange={this.onChange}
          type='text'
          placeholder='Full Name'
        />
        <input
          name='email'
          value={email}
          onChange={this.onChange}
          type='text'
          placeholder='Email Address'
        />
        <input
          name='passwordOne'
          value={passwordOne}
          onChange={this.onChange}
          type='password'
          placeholder='Password'
        />
        <input
          name='passwordTwo'
          value={passwordTwo}
          onChange={this.onChange}
          type='password'
          placeholder='Confirm Password'
        />
        <button disabled={isInvalid} type='submit'>
          Sign Up
        </button>

        {this.state.isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase)

withRouter(withFirebase(SignUpFormBase))

export default SignUpPage

export { SignUpForm }
