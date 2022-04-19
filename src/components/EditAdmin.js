import React, { Component } from 'react'
import axios from 'axios'
import './EditAdmin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faAddressBook, faQrcode, faFileImage } from '@fortawesome/fontawesome-free-solid'
import { HashLink as Link } from 'react-router-hash-link'

export class EditAdmin extends Component {
   
    constructor() {
        super()
        
            this.state = {
                username: '',
                email: '',
                password: '',
                admins: [],
                loading: true,
            }
        this.handleChange2 = this.handleChange2.bind(this)
        this.updateAdmin = this.updateAdmin.bind(this)
    }

    handleChange2 = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    updateAdmin = async (e) => {
        e.preventDefault();

        document.getElementById('updatebtn').disabled = true;
        document.getElementById('updatebtn').innerHTML = "updating";
        const admin_id = this.props.match.params.id;
        const res = await axios.put(`http://127.0.0.1:8000/api/update-admin/${admin_id}`, this.state);
    
        if(res.data.status === 200) 
        {
          console.log(res.data.message);
          document.getElementById('updatebtn').innerHTML = "Update";
          document.getElementById('updatebtn').disabled = false;
          this.setState({
            username: "",
            email: '',
            password: "",
          });
          this.props.history.push('/account');
        }
    }

    async componentDidMount() {

        const admin_id = this.props.match.params.id;

        console.log(admin_id);
      const response = await axios.get(`http://127.0.0.1:8000/api/edit-admin/${admin_id}`);



      console.log(response.data.admin)
      if(response.data.status === 200)
      {
        this.setState({
            username: response.data.admin.username,
            email: response.data.admin.email,
            password: response.data.password,
          });
      }
      else if(response.data.status === 404)
      {
       
            this.setState({
                noRecord: response.data.message
            });
        
      }
    }

    
  render() {
    return (
      <div className='edit-admin-container'>
        <div className='edit-admin-top'></div>
        <div className='edit-admin-hero'>
            <div className='edit-admin-hero-left'>
            <ul className='edit-admin-hero-menu'>
            <li>
              <span><FontAwesomeIcon icon={faAddressBook} /></span><Link to='/account' smooth  className='edit-admin-hero-menu-link'>Account</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faBookOpen} /></span><Link to='/records' smooth  className='edit-admin-hero-menu-link'>Records Manager</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faFileImage} /></span><Link to='/generate' smooth  className='account-hero-menu-link'>Generate QR Code</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faQrcode} /></span><Link to='/scan' smooth className='edit-admin-hero-menu-link'>Scan QR Code</Link>
            </li>
            </ul>
            </div>
            <div className='edit-admin-hero-right'>
                <form className='edit-admin-hero-form' onSubmit={this.updateAdmin}>
                    <h2>Update Admin</h2>
                    <label>Username</label>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleChange2} />
                    <label>Email</label>
                    <input type='email' name='email' value={this.state.email} onChange={this.handleChange2} />
                    <label>Password</label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange2} />
                    <button type='submit' id='updatebtn'>Update</button>
                </form>

                <h4 className='noRecord'>{this.state.noRecord}</h4>
            </div>
        </div>
      </div>
    )
  }
}

export default EditAdmin