import { useState } from 'react';
import './global.css';

import {Header} from './Components/Header/Header';


function App() {

  const [count, setCount] = useState(0)

  return (
    <Header/>
  )
}

export default App;
