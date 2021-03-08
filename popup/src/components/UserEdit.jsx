import { useState } from 'react';
import closeButton from './window-close.svg';

function UserEdit ({show, userInfo, showChange, updateUser}) {
  const [thisUser, updateThisUser] = useState({...userInfo});
  const { username, password, nickname } = thisUser;
  const userValid = true;
  const handleInput = (e, key) => {
    const thisChange = {
      username,
      password,
      nickname,
      [key]: e.target.value
    };
    updateThisUser(thisChange);
  };
  const handleSave = () => {
    updateUser({username, password, nickname});
    showChange(false)
  };
  const handleClose = () => {
    updateThisUser({...userInfo});
    showChange(false)
  };

  return (
    <>
      {show && <div className="user-edit">
        <button className="close" onClick={handleClose}><img src={closeButton} alt="Close window"/></button>
        <div className="user-edit-up">
          <input value={username} type="text" placeholder="username" onInput={e=>handleInput(e, 'username')} disabled/>
          <input value={password} type="text" placeholder="password" onInput={e=>handleInput(e, 'password')} />
        </div>
        <input value={nickname} type="text" placeholder="name" className="add-user-name full-width"  onInput={e=>handleInput(e, 'nickname')} />
        <button disabled={!userValid} onClick={handleSave}>Update User</button>
      </div>}
    </>
    )
}

export default UserEdit;
