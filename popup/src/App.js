import { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import './App.css';


function App() {
  const [userList, updateUserList] = useState({});


  const saveUser = (user) => {
    updateUserList(prev=>({...prev, [user.username]: user}));
  }

  return (
    <div className="App">
      <div className="heading-container">
        <h2>Users</h2>
        <AddUser doSave={saveUser}/>
      </div>
      {Object.keys(userList).map(key=><span key={key}>{key}</span>)}
    </div>
  );
}

export default App;
