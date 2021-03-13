import { useState } from 'react';
import './Switch.css';

function Switch () {
  const [switched, setSwitched] = useState(false);
  return (
    <div className="switch-container">
      <label>{switched ? 'Auto login: On' : 'Auto login: Off'}</label>
      <div className={`switch${switched? ' checked': ''}`} onClick={()=>setSwitched(!switched)}>
        <span className={`switch-button${switched? ' checked': ''}`}>
          <input type="checkbox" className="checkbox" checked={switched} value={switched} />
        </span>
      </div>
    </div>
  );
}

export default Switch;
