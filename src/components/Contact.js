import axios from 'axios'
import React, { Component } from 'react'
import './Contact.css'

export class Contact extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      message: "",
      error_list: [],
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
    const res = await axios.post('http://127.0.0.1:8000/api/add-message', this.state);

    if(res.data.status === 200) 
    {
      console.log(res.data.message);
      this.setState({
        email: "",
        message: "",
      });
    }
    else
    {
      this.setState({
        error_list: res.data.validate_error,
      });
    }
  }
  render() {
   
    return (
      <div className='contact-school'>
        <div className='contact-school-top'></div>
        <form className='form-contact' onSubmit={this.handleSubmit}>
          <h2 className='contact-header-wait'><span style={{ color: '#0071f3' }}>Contact</span> Us</h2>
          <label>Email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          <span className='validate-span'>{this.state.error_list.email}</span>
          <label>Message</label>
          <textarea type="text" name="message" value={this.state.message} onChange={this.handleChange} />
          <span className='validate-span'>{this.state.error_list.message}</span>
          <button type='submit'>Send</button>
        </form>

        
      </div>
    )
  }
}

export default Contact