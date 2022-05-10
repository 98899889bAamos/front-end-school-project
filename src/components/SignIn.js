import React, { Component } from 'react'

import './SignIn.css'


export class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      mommaError: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
    
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    let item = this.state;
    let result = await fetch(`http://localhost:8000/api/login`, {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        "Accept":'application/json'
      },
      body:JSON.stringify(item)
    });
    
    result = await result.json();

    localStorage.setItem("user-info", JSON.stringify(result))
    if(result.status === 200) {
    this.props.history.push('/account')
    }
    if (result.status === 404) {
      this.setState({
        mommaError: result.error
      });
    }
  }
  render() {
    
    return (
      <div className='sign-school'>
        <div className='sign-school-top'></div>

        <form className='contact-sign-form' onSubmit={this.handleSubmit}>
          <h2 className='contact-header-wait'><span style={{ color: '#0071f3' }}>Sign</span> in</h2>
          <label>Username</label>
         <input type="text" name='username' value={this.state.username} onChange={this.handleChange} /> 
         <label>Password</label>
         <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
         <button>Send</button>
          <span style={{ color: '#a10453', marginTop: '10px' }}>{this.state.mommaError}</span>
        </form>
      </div>
    )
  }
}

export default SignIn