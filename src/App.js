import React from 'react';
import TopAppBar from './components/Bar/TopAppBar'
import RouterMain from './routes/RouterMain';

function App() {
  const [title, setTitle] = React.useState('Dashboard')
  return (
    <div>
      <header >
        <TopAppBar set={setTitle} title={title}/>
      </header>
      <main>
        <RouterMain />
      </main>
    </div>
  );
}

export default App;
