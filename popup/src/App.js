import { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UserItem from './components/UserItem';
import './App.css';


function App() {
  const [userList, updateUserList] = useState({});
  const [envUser, updateEnvUser] = useState({});

  const saveUser = (user) => {
    updateUserList(prev=>({...prev, [user.username]: user}));
  }

  const updateEnv = (username, env) => {
    updateEnvUser(prev=>({...prev,[env]: username }));
  };

  const removeEnv = (username, env) => {
    updateEnvUser(prev=>{
      let thisUpdate = prev[env];
      if(thisUpdate === username && prev.hasOwnProperty(env)) {
        delete prev[env];
      }
      return prev
    });
  }

  console.error(envUser);
  return (
    <div className="App">
      <div className="heading-container">
        <h2>Users</h2>
        <AddUser doSave={saveUser}/>
      </div>
      {Object.keys(userList).map(key=><UserItem key={key} userInfo={userList[key]} updateEnv={(env)=>updateEnv(key, env)} removeEnv={removeEnv} />)}
    </div>
  );
}

export default App;
