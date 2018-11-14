import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  renderErrors() {
    return(
     <ul>
       {this.props.errors}
     </ul>
    );
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
      <div>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          <h2>{this.props.formType}</h2>
          <br/>
          {this.props.formType === "Sign Up" ? <Link to="/login">Already a member? Log in!</Link> : <Link to="/signup">Not a member? Sign Up!</Link>}
          <br/>

          {this.renderErrors()}

          <div className="login-form">

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
