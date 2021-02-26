import { useState } from 'react';
import './AddUser.css';

function AddUser () {
  const [addOpen, setAddOpen] = useState(false);

  const handleButtonClick = () => {
    setAddOpen(!addOpen);
  };
  return (
    <div className="add-user-container">
      <button className={`add-user${addOpen? ' open': ''}`} onClick={handleButtonClick}>
        <span>+</span> add user
      </button>
      {addOpen &&
        <div className="add-user-input">
          <div className="add-user-row">
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
          </div>
          <input type="text" placeholder="name" className="full-width" />
        </div>
      }
    </div>);
}

export default AddUser;
