/*global chrome*/
import { useState, useEffect } from 'react';
import AddUser from './components/AddUser/AddUser';
import UserItem from './components/UserItem';
import Switch from './components/Switch';
import './App.css';


function App() {
  const [userList, updateUserList] = useState({});
  const [userEnv, updateEnvUser] = useState({});

  const saveUser = (user) => {
    updateUserList(prev=>{
      chrome?.storage?.local?.set({userData: {...prev, [user.username]: user}});
      return {...prev, [user.username]: user}
    });
  }

  const updateEnv = (username, env) => {
    
    updateEnvUser(prev=>{
      chrome?.storage?.local?.set({userEnv: {...prev,[env]: username }});
      return {...prev,[env]: username }
    });
  };

  const removeEnv = (username, env) => {
    updateEnvUser(prev=>{
      let thisUpdate = prev[env];
      if(thisUpdate === username && prev.hasOwnProperty(env)) {
        delete prev[env];
      }
      chrome?.storage?.local?.set({userEnv: {...prev}});
      return {...prev}
    });
  }

  const handleDelete = username => {
    // Remove user from user list.
    updateUserList(prev=>{
      delete prev[username];
      chrome?.storage?.local?.set({userData: {...prev}});
      return {...prev};
    });

    // Remove user from env list.
    updateEnvUser(prev=>{
      Object.keys(prev).forEach(env=>{
        const thisUser = prev[env];
        if(thisUser === username){
          delete prev[env];
        }
      })
      chrome?.storage?.local?.set({userEnv: {...prev}});
      return {...prev}
    });
  };

  useEffect(() => {
    chrome?.storage?.local?.get(['userData', 'userEnv'], result => {
      console.error('Got userData', result);
      updateUserList(result.userData);
      updateEnvUser(result.userEnv);
    });
  }, [])
  console.error(userList);
  return (
    <div className="App">
      <div className="heading-container">
        <div className="heading-left">
          <h3>Users</h3>
          <AddUser doSave={saveUser}/>  
        </div>
        <Switch />
      </div>
      <div className="user-list">
        {Object.keys(userList || {}).map(key=>(
          <UserItem
            key={key}
            userInfo={userList[key]}
            userEnv={userEnv}
            removeUser={()=>handleDelete(key)}
            updateEnv={(env)=>updateEnv(key, env)}
            removeEnv={removeEnv}
            updateUser={(userInfo)=>{
              updateUserList(prev=>{
                if(userInfo.username !== key){
                  delete prev[key];
                }
                return {...prev, [userInfo.username]: userInfo};
              });
            }}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
