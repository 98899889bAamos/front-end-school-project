
import React, { Component } from 'react'
import axios from 'axios'
import QRCode from 'qrcode'
import './EditQr.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faAddressBook, faQrcode, faFileImage } from '@fortawesome/fontawesome-free-solid'
import { HashLink as Link } from 'react-router-hash-link'

export class EditQr extends Component {
    constructor() {
      super()
      this.state = {
        s_name: '',
        class: '',
        p_name: '',
        number: '',
        students: [],
        noRecord: '',
        imgUrl: '',
      }
      this.handleChange3 = this.handleChange3.bind(this)
      this.generateQrCode = this.generateQrCode.bind(this)
    }
    

    handleChange3 = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    
  
    async componentDidMount() {
        const stud_id = this.props.match.params.id;
        console.log(stud_id);
      const response = await axios.get(`https://www.amosbilly.co.ke/school_project/public/api/edit-students/${stud_id}`);

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

    generateQrCode = async (e) => {

        const stud_id = this.props.match.params.id;
        try {
            e.preventDefault();
            const response = await QRCode.toDataURL(this.state.number);
            console.log(this.state);
            
            this.setState({
                [e.target.name]: e.target.value,
                imgUrl: response
            });
            
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
  render() {

    
    return (
      <div className='editqr-container'>
        <div className='editqr-top'></div>
        <div className='editqr-hero'>
            <div className='editqr-hero-left'>
            <ul className='editqr-hero-menu'>
            <li>
            <span><FontAwesomeIcon icon={faAddressBook} /></span><Link to='/account' smooth  className='editqr-hero-menu-link'>Account</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faBookOpen} /></span><Link to='/records' smooth  className='editqr-hero-menu-link'>Records Manager</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faFileImage} /></span><Link to='/generate' smooth  className='account-hero-menu-link'>Generate QR Code</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faQrcode} /></span><Link to='/scan' smooth className='editqr-hero-menu-link'>Scan QR Code</Link>
            </li>
            </ul>
            </div>
            <div className='editqr-hero-right'>

            <form className='editqr-form' onSubmit={this.generateQrCode}>
              <h2>{this.state.s_name}'s record</h2>

              <label>Student's name</label>
              <input type="text" name="s_name"  value={this.state.s_name} onChange={this.handleChange3} />
              <label>Class</label>
              <input type="text" name="class"  value={this.state.class} onChange={this.handleChange3} />
              <label>Parent's Name</label>
              <input type="text" name="p_name"  value={this.state.p_name} onChange={this.handleChange3} />
              <label>Mr./Ms. {this.state.p_name}'s Number</label>
              <input type="text" name="number"  value={this.state.number} onChange={this.handleChange3} />
              <button type="submit" id='updatebtn'>Get QR Code</button>
            </form> 
            <h4 className='noRecord'>{this.state.noRecord}</h4>


            <div className='edit-qr-color'>
                {this.state.imgUrl ? (<img src={this.state.imgUrl} alt="" className='edit-qr-show'/>) : null}
                {this.state.imgUrl ? ( <a href={this.state.imgUrl} download className='qr-down'>Download</a>) : null}
            </div>

            </div>
        </div>
      </div>
    )
  }
}

export default EditQr