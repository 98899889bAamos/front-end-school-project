import React, { Component } from 'react'
import './Scan.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faAddressBook, faQrcode, faFileImage } from '@fortawesome/fontawesome-free-solid'
import { HashLink as Link } from 'react-router-hash-link'
import { QrReader } from 'react-qr-reader'

export class Scan extends Component {
  constructor()
  {
    super()
    this.state = {
      scanResultWebCam: ''
    }
    this.handleErrorWebCam = this.handleErrorWebCam.bind(this)
    this.handleScanWebCam = this.handleScanWebCam.bind(this)
  }

  handleErrorWebCam = (error) => {
    console.log(error)
  }

  handleScanWebCam = (result) => {
    if(result) {
      this.setState({
        scanResultWebCam: result
      });

      console.log(this.state.scanResultWebCam);
    }
  }
  render() {
    return (
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
                delay={300}
                style={{ width: '100%' }}
                onError={this.handleErrorWebCam}
                onScan={this.handleScanWebCam}
                className="cam-scanner"
                />
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Scan