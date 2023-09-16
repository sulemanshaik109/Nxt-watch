import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginFormContainer,
  FormContainer,
  WebsiteLogo,
  InputContainer,
  InputLabel,
  InputElement,
  ShowPasswordContainer,
  Checkbox,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from '../../styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    checked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({checked: !prevState.checked}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password, checked} = this.state

    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <InputElement
          type={checked ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <InputElement
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg, checked} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginFormContainer>
        <FormContainer onSubmit={this.submitForm}>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <ShowPasswordContainer>
            <Checkbox
              type="checkbox"
              onChange={this.onChangeCheckbox}
              checked={checked}
              id="checkbox"
            />
            <CheckboxLabel htmlFor="checkbox">Show Password</CheckboxLabel>
          </ShowPasswordContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </FormContainer>
      </LoginFormContainer>
    )
  }
}

export default LoginForm
