import React, { useEffect, useState } from 'react';
import logo from './logo.svg';


function App() {
const [user, setUser] = useState();

useEffect(()=>{
  (async()=>{
    const response = await fetch("http://localhost:11000/user");
    const r = await response.json();
    setUser(r[0].login);
  })();
}, []);
 
 








console.log("r");

  return (
    <div>
      {user}
    </div>
  );
}

export default App;