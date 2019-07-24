import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/style.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Chat from './Chat';

const App = () => (
  <div>
    <Router>
      <Routes />
      <Chat />
    </Router>
  </div>
);

export default App;
