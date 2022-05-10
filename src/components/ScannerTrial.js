import React, { Component } from 'react'
import './ScannerTrial.css'
import { QrReader } from 'react-qr-reader'

export class ScannerTrial extends Component {
    constructor () {
        super()
        this.state = {
            delay: 100,
            result: 'No result'
        }
        this.handleScan = this.handleScan.bind(this)
    }

    handleScan = (data) => {
        this.setState({
            result: data
        });
    }
    handleError(err) {
        console.error(err)
    }
    openImageDialog() {
        this.ref.qrReader1.openImageDialog()
    }
  render() {
    const previewStyle = {
        height: 240,
        width: 320
    }
    return (
        
      <div className='scanner-trial-container'>
        <div className='scanner-trial-top'>
        
        </div>
        <div className='scanner-trial-bottom'>
            <div className='scanner-holder'>
                <QrReader ref="qrReader1"
                    delay={this.state.delay}
                    previewStyle={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    legacyMode={true}
                    />

                    <input type="button" value="Submit QR Code" onClick={this.openImageDialog.bind(this)} />
                    <p>{this.state.result}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default ScannerTrial
