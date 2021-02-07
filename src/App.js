import React from 'react';
import './App.css';
import FullName from './components/FullName';
import Address from './components/Address';
import ProfilePhoto from './components/profilePhoto'; 
function App() {
  return (
    <div className="App">
<div className= "header"> 
  <h1 className="title"> Hello Welcom in my profile</h1>
<ProfilePhoto/>

  <h1 className="name">My name is :<FullName/></h1>  
  <h1 className="addres">I live in :<Address/></h1>
</div>
 
    </div>
  );
}

export default App;