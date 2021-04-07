import { useState } from 'react';
import UserEdit from './UserEdit';
import deleteButton from './trash-alt.svg';
import editButton from './pen.svg';
const envList = ['lab','dev', 'test'];

function UserItem ({ userInfo = {}, userEnv= {}, removeUser, updateEnv, removeEnv, updateUser }) {
  const { username, nickname } = userInfo;
  const [ showUserEdit, updateShowUserEdit ] = useState(false);

  const handleClick = (env) => {
    const thisEl = document.getElementById(`${username}-${env}`);
    thisEl.checked = !thisEl.checked;
    updateEnv(env);
  };

  const handleChange = (env) => {
    updateEnv(env);
  };

  const handleClear = () => {
    envList.forEach(env=>{
      const thisEl = document.getElementById(`${username}-${env}`);
      if(thisEl.checked){ removeEnv(username, env) }
      thisEl.checked=false;
    });
  }
  console.error(userEnv);
  return (
    <div className="user-container">
      <UserEdit userInfo={userInfo} show={showUserEdit} showChange={updateShowUserEdit} updateUser={updateUser} />
      <div className="user-row">
        <div className="user-part">
          {nickname && <span>{`${nickname} - `}</span>}{username}
        </div>
      </div>
      <div className="user-row">
        <fieldset className="user-env">
          {envList.map(env=>(
            <div key={`${username}-${env}`} className="env-continer">
              <input
                id={`${username}-${env}`}
                type="radio"
                name={`env-${env}`}
                onChange={()=>handleChange(env)}
                checked={userEnv[env] === username}
                readOnly
              />
              <label onClick={()=>handleClick(env)}>{env}</label>
            </div>
          ))}
          <button onClick={handleClear}>clear</button>
        </fieldset>
        <div className="right-row">
          <button className="btn-edit" onClick={()=>{updateShowUserEdit(true)}} style={{backgroundImage:`url(${editButton})`}}>edit</button>
          <button className="btn-delete" onClick={removeUser} style={{backgroundImage:`url(${deleteButton})`}}>delete</button>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
