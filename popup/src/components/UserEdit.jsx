import closeButton from './window-close.svg';

function UserEdit () {
  let username, password, nickname;
  const userValid = true;
  const handleInput = () => {};
  const handleSave = () => {};
  const handleClose = () => {};

  return (
    <div className="user-edit">
      <button className="close" onClick={handleClose}><img src={closeButton} alt="Close window"/></button>
      <div className="">
        <input value={username} type="text" placeholder="username" onInput={e=>handleInput(e, 'username')} />
        <input value={password} type="text" placeholder="password" onInput={e=>handleInput(e, 'password')} />
      </div>
      <input value={nickname} type="text" placeholder="name" className="add-user-name full-width"  onInput={e=>handleInput(e, 'nickname')} />
      <button disabled={!userValid} onClick={handleSave}>Update User</button>
    </div>
    )
}

export default UserEdit;
