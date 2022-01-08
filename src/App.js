import { useEffect, useRef } from 'react'

import logo from './pippy.png';
import './App.css';
import token from './token.json'
// const Google = require('google-api-wrapper');

const App = () => {
  const hiddenFileInput  = useRef(null);

  const handleFileUploadClick = event => {
    hiddenFileInput.current.click();
  }

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    console.log('FILE HERE', fileUploaded);
    // upload file to the google drive api;
  }

  // runs to auth google
  useEffect(async () => {
    
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontWeight: 200 }}>
          insert .mp3 files below
        </p>
        <div className="App-container-upload-btn">
          <button 
            className="App-upload-btn"
            onClick={handleFileUploadClick}>
            Click here to insert meme
          </button>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: 'none' }}>
          </input>
        </div>
      </header>
    </div>
  );
}

export default App;
