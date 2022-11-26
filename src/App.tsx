import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Application } from './components/application/Application';
// import { Skills } from './components/skills/skills';
// import { Counter } from './components/counter/counter';

import { AppProviders } from './providers/app-providers';
import { MuiMode } from './components/mui/mui-mode';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>

    // <div className="App">
    //   <Counter />
    //   <Skills skills={['html', 'css', 'javascript']} />
    //   <Application />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
