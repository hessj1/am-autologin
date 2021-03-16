/*global chrome*/
import { useState } from 'react';
import './Switch.css';

function Switch () {
  const [switched, setSwitched] = useState(false);
  const handleSwitch = async ()=> {
    setSwitched(!switched);
    if(chrome?.storage){
      chrome.storage.local.get(['hello'], function(result) {
        console.log(result);
      });
      chrome.storage.local.set({'hello': !switched});
    }
  }

  return (
    <div className="switch-container">
      <label>{switched ? 'Auto login: On' : 'Auto login: Off'}</label>
      <div className={`switch${switched? ' checked': ''}`} onClick={handleSwitch}>
        <span className={`switch-button${switched? ' checked': ''}`}>
          <input type="checkbox" className="checkbox" checked={switched} value={switched} readOnly/>
        </span>
      </div>
    </div>
  );
}

export default Switch;
