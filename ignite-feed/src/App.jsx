import { useState } from 'react';
import './global.css';
import styles from '@/App.module.css'


import {Header} from './Components/Header/Header';
import {Sidebar} from  './Components/Sidebar/Sidebar'
function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
            <p>Aqui ficam os posts.</p>
        </main>
      </div>
    </div>  
  )
}

export default App;
