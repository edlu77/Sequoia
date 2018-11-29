import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
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


  emailInput() {
    if (this.props.formType === 'Sign Up') {
      return (
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            placeholder="Email"
          />
      )
    }
  };

  renderErrors() {
    const errors = this.props.errors.responseJSON || [];
    return (
      <ul>
        {errors.map((error) => {
          return (
            <li>
              {error}
            </li>
          )
        })}
      </ul>
    )
  };

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, {username: "DemoUser", password: "starwars"});
    this.props.login(user);
  }

  render() {

    return (
      <div className="login-page">
        <div className="login-signup-form">
          <div className="sequoia-logo">
            <span>seQuoia</span>
          </div>
          <h2 className="tagline">A place to ask questions and become smarter (maybe).</h2>

          <form onSubmit={this.handleSubmit} className='login-form-box'>
            <div className="login-title">{this.props.formType}</div>

          {this.renderErrors()}

            <div className="session-input">
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username"
                />
                <br/>
                {this.emailInput()}
                <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                />
              <br/>

              {this.props.formType === "Sign Up" ? <Link to="/login">Already a member? Log in!</Link> : <Link to="/signup">Not a member? Sign Up!</Link>}
              <br/>
              <button className="demo-submit-button" type="submit" onClick={this.handleDemoSubmit}>Demo</button>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>

          </form>
        </div>
    </div>
    )
  };
};

export default withRouter(SessionForm);
