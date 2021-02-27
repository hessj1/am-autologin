import { useState } from 'react';
import './AddUser.css';

function AddUser () {
  const [addOpen, setAddOpen] = useState(false);
  const [userInfo, updateUser] = useState({username: undefined, password: undefined, nickName: undefined});
  const { username, password, nickName } = userInfo;
  const handleButtonClick = () => {
    setAddOpen(!addOpen);
  };

  const handleInput = (e, type) => {
    updateUser(prev=>({...prev, [type]: e.value}))
  };

  return (
    <div className="add-user-container">
      <button className={`add-user${addOpen? ' open': ''}`} onClick={handleButtonClick}>
        <span>+</span> add user
      </button>
      {addOpen &&
        <div className="add-user-input">
          <button className="close">X</button>
          <div className="add-user-row">
            <input value={username} type="text" placeholder="username" onInput={e=>handleInput(e, 'username')} />
            <input value={password} type="text" placeholder="password" onInput={e=>handleInput(e, 'password')} />
          </div>
          <input value={nickName} type="text" placeholder="name" className="add-user-name full-width"  onInput={e=>handleInput(e, 'nickName')} />
          <button>Add user</button>
        </div>
      }
    </div>);
}

export default AddUser;
