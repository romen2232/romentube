import React, {useReducer} from 'react';
import './assets/css/App.css';
import { AppRouter } from './routers/AppRouter/AppRouter';
import { AuthContext } from './context/Auth/AuthContext';

//TODO mejorar el manejo de estados, no me daba tiempo
function App() {

  return (
      <AppRouter/>
  );
}

export default App;
