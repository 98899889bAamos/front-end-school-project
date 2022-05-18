import React, {useState, useRef} from 'react'
import './ScannerTrial.css'
import { QrReader } from 'react-qr-reader'

function ScannerTrial() {
    const qrRef = useRef(null);
    const [scanResultFile, setScanResultFile] = useState('');

    const handleErrorFile = (error) => {
        console.log(error);
    }
    const handleScanFile = (result) => {
        if (result) {
            setScanResultFile(result);
        }
    }

    const onScanFile = () => {
        qrRef.current.openImageDialog();
    }
  return (
    <div>
    <div className='scanner-trial-container'>
        <div className='scanner-trial-top'>
        
        </div>
        <div className='scanner-trial-bottom'>
            <div className='scanner-holder'>
                <input type='file' onClick={onScanFile}/>
                <QrReader 
                ref={qrRef}
                delay={300}
                style={{ width: '100%' }}
                onError = {handleErrorFile}
                onScan = {handleScanFile}
                legacyMode
                />
                <h3>Scanned Code: {scanResultFile}</h3>
            </div>
            </div>
            </div>
          </div>
  )
}

export default ScannerTrial