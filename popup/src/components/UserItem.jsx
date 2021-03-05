const envList = ['lab','dev', 'test'];

function UserItem ({ userInfo = {}, updateEnv, removeEnv }) {
  const { username, password, nickname } = userInfo;

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

  return (
    <div className="user-container">
      <div className="user-row">
        <div className="user-part">
          {nickname && <span>{`${nickname} - `}</span>}{username}
        </div>
      </div>
      <div className="user-row">
        <fieldset className="user-env">
          {envList.map(env=>(
            <div key={`${username}-${env}`}>
              <input id={`${username}-${env}`} type="radio" name={`env-${env}`} onChange={()=>handleChange(env)}/>
              <label onClick={()=>handleClick(env)}>{env}</label>
            </div>
          ))}
          <button onClick={handleClear}>clear</button>
        </fieldset>
      </div>
      
    </div>
  );
}

export default UserItem;