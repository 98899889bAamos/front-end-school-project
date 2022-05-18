
import React, { Component } from 'react'
import axios from 'axios'
import './Generate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faAddressBook, faQrcode, faSearch, faFileImage } from '@fortawesome/fontawesome-free-solid'
import { HashLink as Link } from 'react-router-hash-link'

export class Generate extends Component {
    constructor() {
      super()
      this.state = {
        s_name: '',
        class: '',
        p_name: '',
        number: '',
        loading: '',
        students: [],
        error_list: [],
        searchFul: '',
      }
      this.handleChange3 = this.handleChange3.bind(this)
      this.handleSubmit3 = this.handleSubmit3.bind(this)
      this.deleteStudent = this.deleteStudent.bind(this)
      this.searchTerm = this.searchTerm.bind(this)
    }

    handleChange3 = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    handleSubmit3 = async (e) => {
      e.preventDefault();
      const res = await axios.post('https://www.amosbilly.co.ke/school_project/public/api/add-student', this.state);
      if(res.data.status === 200)
      {
        this.setState({
          s_name: '',
          class: '',
          p_name: '',
          number: ''
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
      const response = await axios.get('https://www.amosbilly.co.ke/school_project/public/api/students');

      console.log(response.data.students)
      if(response.data.status === 200)
      {
          this.setState({
            students: response.data.students,
            loading: false,
          });
      }
    }

    deleteStudent = async (e, id) => {

      const clickedNight = e.currentTarget;
      clickedNight.innerText = "Deleting";
      const res = await axios.delete(`https://www.amosbilly.co.ke/school_project/public/api/delete-student/${id}`);

      if(res.data.status === 200)
      {
        clickedNight.closest("tr").remove();
        console.log(res.data.message);
      }
    }
    searchTerm = (e) => {
      this.setState({
        searchFul: e.target.value
      });
    }
  render() {
    const leave = this.state.students;
    return (
      <div className='generate-container'>
        <div className='generate-top'></div>
        <div className='generate-hero'>
            <div className='generate-hero-left'>
            <ul className='generate-hero-menu'>
            <li>
            <span><FontAwesomeIcon icon={faAddressBook} /></span><Link to='/account' smooth  className='generate-hero-menu-link'>Account</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faBookOpen} /></span><Link to='/records' smooth  className='generate-hero-menu-link'>Records Manager</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faFileImage} /></span><Link to='/generate' smooth  className='generate-hero-menu-link'>Generate QR Code</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faQrcode} /></span><Link to='/scan' smooth className='generate-hero-menu-link'>Scan QR Code</Link>
            </li>
            </ul>
            </div>
            <div className='generate-hero-right'>
            <table className='record-table generation-class'>
              <h2>List of Students [{leave.length}]</h2>

              <div className='searchBox'>
                  <input type="text" placeholder='search...' onChange={this.searchTerm}  value={this.state.searchFul} />
                  <span><FontAwesomeIcon icon={faSearch} /></span>
              </div>
                <tr>
                  <th>Student's name</th>
                  <th>Class</th>
                  <th>Parent's Name</th>
                  <th>Parent's Number</th>
                  <th>Action</th>
                </tr>
                {
                  leave.filter((val) => {
                    if(this.state.searchFul === "") {
                      return val
                    }
                    else if (val.s_name.toLowerCase().includes(this.state.searchFul.toLowerCase())) {
                      return val
                    }
                    else if (val.class.toString().includes(this.state.searchFul.toString())) {
                      return val
                    }
                    else if (val.p_name.toLowerCase().includes(this.state.searchFul.toLowerCase())) {
                      return val
                    }
                    else if (val.number.toString().includes(this.state.searchFul.toString())) {
                      return val
                    }
                    else {
                      return ""
                    }
                  }).map((item) => {
                    return(
                      <tr key={item.id}>
                        <td>{item.s_name}</td>
                        <td>{item.class}</td>
                        <td>{item.p_name}</td>
                        <td>{item.number}</td>
                        <td><Link to={`edit-qr/${item.id}`} className='edit-student'>Generate QR Code</Link></td>
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

export default Generate