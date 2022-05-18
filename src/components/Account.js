import React, { Component } from 'react'
import axios from 'axios'
import './Account.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faAddressBook, faQrcode, faSearch, faFileImage } from '@fortawesome/fontawesome-free-solid'
import { HashLink as Link } from 'react-router-hash-link'

export class Account extends Component {
   
    constructor() {
        super()
        
            this.state = {
                username: '',
                email: '',
                password: '',
                admins: [],
                loading: true,
                error_list: [],
                searchTry: '',

            }
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleSubmit2 = this.handleSubmit2.bind(this)
        this.searchTerm = this.searchTerm.bind(this)
    }

    handleChange2 = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit2 = async (e) => {
        e.preventDefault();
        const res = await axios.post('https://www.amosbilly.co.ke/school_project/public/api/add-admin', this.state);
    
        if(res.data.status === 200) 
        {
          console.log(res.data.message);
          this.setState({
            username: "",
            email: '',
            password: "",
          });
        }
        else
        {
          this.setState({
            error_list: res.data.validate_err,
          });
        }
    }

    async componentDidMount() {
      const response = await axios.get('https://www.amosbilly.co.ke/school_project/public/api/admins');

      console.log(response.data.admins)
      if(response.data.status === 200)
      {
          this.setState({
            admins: response.data.admins,
            loading: false,
          });
      }
    }

    deleteAdmin = async (e, id) => {

      const clickedNight = e.currentTarget;
      clickedNight.innerText = "Deleting";
      const res = await axios.delete(`https://www.amosbilly.co.ke/school_project/public/api/delete-admin/${id}`);

      if(res.data.status === 200)
      {
        clickedNight.closest("tr").remove();
        console.log(res.data.message);
      }
    }

    searchTerm = (e) => {
      this.setState({
        searchTry: e.target.value
      });
      console.log(this.state.searchTry);
    }
  render() {
    const text = this.state.admins;
   
    return (
      <div className='account-container'>
        <div className='account-top'></div>
        <div className='account-hero'>
            <div className='account-hero-left'>
            <ul className='account-hero-menu'>
            <li>
              <span><FontAwesomeIcon icon={faAddressBook} /></span><Link to='/account' smooth  className='account-hero-menu-link'>Account</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faBookOpen} /></span><Link to='/records' smooth  className='account-hero-menu-link'>Records Manager</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faFileImage} /></span><Link to='/generate' smooth  className='account-hero-menu-link'>Generate QR Code</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faQrcode} /></span><Link to='/scan' smooth className='account-hero-menu-link'>Scan QR Code</Link>
            </li>
            </ul>
            </div>
            <div className='account-hero-right'>
                <form className='account-hero-form' onSubmit={this.handleSubmit2}>
                    <h2>Add Admin</h2>
                    <label>Username</label>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleChange2} />
                    <span className='validate-span'>{this.state.error_list.username}</span>
                    <label>Email</label>
                    <input type='email' name='email' value={this.state.email} onChange={this.handleChange2} />
                    <span className='validate-span'>{this.state.error_list.email}</span>
                    <label>Password</label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange2} />
                    <span className='validate-span'>{this.state.error_list.password}</span>
                    <button>Save</button>
                </form>

                <table className='account-table'>
                  <h2>List of Admins [{text.length}]</h2>
                  <div className='searchBox'>
                    <input type="text" placeholder='search...' onChange={this.searchTerm} value={this.state.searchTry}/>
                    <span><FontAwesomeIcon icon={faSearch} /></span>
                  </div>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Action</th>
                    <th>2nd Action</th>
                  </tr> 
                    {
                      text.filter((val) => {
                        if(this.state.searchTry === "") {
                          return val
                        }
                        else if (val.username.toLowerCase().includes(this.state.searchTry.toLowerCase())) {
                          return val
                        }
                        else if (val.email.toLowerCase().includes(this.state.searchTry.toLowerCase())) {
                          return val
                        }
                        else {
                          return ""
                        }
                      }).map((item) => {
                        return(
                          <tr key={item.id}>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td><Link to={`edit-admin/${item.id}`} className='td-buttton-link'>Edit</Link></td>
                            <td onClick={(e) => this.deleteAdmin(e, item.id)}>Delete</td>
                          </tr>
                        );
                      })
                        
                    }
                  
                </table>
            </div>
        </div>
      </div>
    )
  }
}

export default Account