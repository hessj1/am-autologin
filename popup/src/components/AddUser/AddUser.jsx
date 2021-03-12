import { useState } from 'react';
import './AddUser.css';
import closeButton from '../window-close.svg';

const defaultUserInfo = {username: '', password: '', nickname: ''};

function AddUser ({doSave}) {
  const [addOpen, setAddOpen] = useState(false);
  const [userInfo, updateUser] = useState(defaultUserInfo);
  const { username, password, nickname } = userInfo;
  const handleButtonClick = () => {
    if(!addOpen){
      setAddOpen(true);
    } else {
      handleClose();
    }
  };

  const handleInput = (e, type) => {
    updateUser(prev=>({...prev, [type]: e?.target?.value}))
  };

  const handleClose = e => {
    setAddOpen(false);
    updateUser({username: '', password: '', nickname: ''});
  };

  const handleSave = () => {
    doSave(userInfo);
    handleClose();
  }
  
  const userValid = username.length && password.length;


  return (
    <div className="add-user-container">
      <button className={`add-user${addOpen? ' open': ''}`} onClick={handleButtonClick}>
        <span>+</span> add user
      </button>
      <div className={`add-user-input${addOpen ? ' open' : ' closed'}`}>
        <div className="add-user-label">
          <div>{`${nickname ? `${nickname} - `: ''}${username}`}</div>
          <button className="close" onClick={handleClose}><img src={closeButton} alt="Close window"/></button>
        </div>
        <div className="add-user-row">
          <input value={username} type="text" placeholder="username" onInput={e=>handleInput(e, 'username')} />
          <input value={password} type="text" placeholder="password" onInput={e=>handleInput(e, 'password')} />
        </div>
        <input value={nickname} type="text" placeholder="name" className="add-user-name full-width"  onInput={e=>handleInput(e, 'nickname')} />
        <button disabled={!userValid} onClick={handleSave}>Add user</button>
      </div>
    </div>);
}

export default AddUser;
