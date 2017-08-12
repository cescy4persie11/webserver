import React, { PropTypes } from 'react'
import SignUpForm from './SignUpForm';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    // set the initial
    this.state = {
        errors: {summary: 'summary error', email: 'email error', password: 'password error'},
        user: {
          email: '',
          password: '',
          confirm_password: ''
        }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(event) {
    event.preventDefault();
    const email = this.state.user.email;
    const password = this.state.user.password;
    const confirm_password = this.state.user.confirm_password;

    if (password !== confirm_password) {
      return;
    }

    // TODO: post signup data
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    // user['email'] = 'asqweqw@alwe.com'
    // user['password'] = 'passwd'
    // user['confirm_password']

    this.setState({ user });

    if (this.state.user.password !== this.state.user.confirm_password) {
      const errors = this.state.errors;
      errors.password = 'Password and Confirm Passwrod dont match.';
      this.setState({errors});
    } else {
      const errors = this.state.errors;
      errors.password = '';
      this.setState();
    }
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }



}
export default SignUpPage;
