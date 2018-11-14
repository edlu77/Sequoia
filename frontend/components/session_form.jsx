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

  render() {
    debugger
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          <h2>Welcome to Sequoia!</h2>
          <br/>
          <Link to="/signup">Sign Up</Link>
          <br/>
          <Link to="/login">Log In</Link>
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
              <label>Email:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              </label>
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
