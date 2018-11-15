import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = {username: "", email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    debugger
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }


  emailInput() {
    if (this.props.formType === 'Sign Up') {
      return (
        <label>Email:
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
          />
        <br/>
        </label>
      )
    }
  };

  render() {

    return (
      <div className="login-signup-form">
        <div className="sequoia-logo">
          <span>Sequoia</span>
        </div>
        <h2 className="slogan">A place to ask questions and become smarter (maybe).</h2>

        <form onSubmit={this.handleSubmit} className='login-form-box'>
          <h2>{this.props.formType}</h2>
          <br/>
          {this.props.formType === "Sign Up" ? <Link to="/login">Already a member? Log in!</Link> : <Link to="/signup">Not a member? Sign Up!</Link>}
          <br/>

          <div>

            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>

            <br/>

            {this.emailInput()}

            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>

            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>

        </form>
      </div>
    )
  };
};

export default withRouter(SessionForm);
