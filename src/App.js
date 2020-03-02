import React from 'react';
import SideBar from './components/Bar/SideBar';
import Login from './components/Views/Login/Login';

function App() {
  const [i , setI] = React.useState(false)

  return (
    <div>
        {i === false ? <Login set={setI} /> : <SideBar />}

    </div>
  );
}

export default App;
