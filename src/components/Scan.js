import React, { Component } from 'react'
import './Scan.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faAddressBook, faQrcode, faFileImage } from '@fortawesome/fontawesome-free-solid'
import { HashLink as Link } from 'react-router-hash-link'
import { QrReader } from 'react-qr-reader'

export class Scan extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
      face: 'rear'
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div className='scan-container'>
        <div className='scan-top'></div>
        <div className='scan-hero'>
            <div className='scan-hero-left'>
            <ul className='scan-hero-menu'>
            <li>
            <span><FontAwesomeIcon icon={faAddressBook} /></span><Link to='/account' smooth  className='scan-hero-menu-link'>Account</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faBookOpen} /></span><Link to='/records' smooth  className='scan-hero-menu-link'>Records Manager</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faFileImage} /></span><Link to='/generate' smooth  className='account-hero-menu-link'>Generate QR Code</Link>
            </li>
            <li>
            <span><FontAwesomeIcon icon={faQrcode} /></span><Link to='/scan' smooth className='scan-hero-menu-link'>Scan QR Code</Link>
            </li>
            </ul>
            </div>
            <div className='scan-hero-right'>
              <h2 className='scan-hero-right-header'>Scan QR Code</h2>
              <div className='scan-hero-right-body'>
              <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
              facingMode={this.state.face}
              legacyMode
              />
            <p>{this.state.result}</p>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Scan