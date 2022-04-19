
import React, { Component } from 'react'
import axios from 'axios'
import './EditStudent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faAddressBook, faQrcode, faFileImage } from '@fortawesome/fontawesome-free-solid'
import { HashLink as Link } from 'react-router-hash-link'

export class EditStudent extends Component {
    constructor() {
      super()
      this.state = {
        s_name: '',
        class: '',
        p_name: '',
        number: '',
        loading: '',
        students: [],
        noRecord: '',
      }
      this.handleChange3 = this.handleChange3.bind(this)
      this.updateStudent = this.updateStudent.bind(this)
      
    }

    handleChange3 = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

   

    updateStudent = async (e) => {
      e.preventDefault();
     
      const stud_id = this.props.match.params.id;
      document.getElementById('updatebtn').disabled = true;
      document.getElementById('updatebtn').innerHTML = "updating";
      const res = await axios.put(`http://127.0.0.1:8000/api/update-student/${stud_id}`, this.state);
      if(res.data.status === 200)
      {
      
        this.setState({
          s_name: '',
          class: '',
          p_name: '',
          number: ''
        });
        document.getElementById('updatebtn').innerHTML = "Update";
        document.getElementById('updatebtn').disabled = false;
        this.props.history.push('/records');
       
      }
    }
   
    async componentDidMount() {
        const stud_id = this.props.match.params.id;
        console.log(stud_id);
      const response = await axios.get(`http://127.0.0.1:8000/api/edit-students/${stud_id}`);

      console.log(response.data.student);
      
      if(response.data.status === 200)
      {
        this.setState({
            s_name: response.data.student.s_name,
           class: response.data.student.class,
            p_name: response.data.student.p_name,
            number: response.data.student.number
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
      <div className='edit-container'>
        <div className='edit-top'></div>
        <div className='edit-hero'>
            <div className='edit-hero-left'>
            <ul className='edit-hero-menu'>
            <li>
            <span><FontAwesomeIcon icon={faAddressBook} /></span><Link to='/account' smooth  className='edit-hero-menu-link'>Account</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faBookOpen} /></span><Link to='/records' smooth  className='edit-hero-menu-link'>Records Manager</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faFileImage} /></span><Link to='/generate' smooth  className='account-hero-menu-link'>Generate QR Code</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faQrcode} /></span><Link to='/scan' smooth className='edit-hero-menu-link'>Scan QR Code</Link>
            </li>
            </ul>
            </div>
            <div className='edit-hero-right'>
            <form className='edit-form' onSubmit={this.updateStudent}>
              <h2>Update {this.state.s_name}'s record</h2>

              <label>Student's name</label>
              <input type="text" name="s_name"  value={this.state.s_name} onChange={this.handleChange3} />
              <label>Class</label>
              <input type="text" name="class"  value={this.state.class} onChange={this.handleChange3} />
              <label>Parent's Name</label>
              <input type="text" name="p_name"  value={this.state.p_name} onChange={this.handleChange3} />
              <label>Mr./Ms. {this.state.p_name}'s Number</label>
              <input type="text" name="number"  value={this.state.number} onChange={this.handleChange3} />
              <button type="submit" id='updatebtn'>Update</button>
            </form> 


            <h4 className='noRecord'>{this.state.noRecord}</h4>
            </div>
        </div>
      </div>
    )
  }
}

export default EditStudent