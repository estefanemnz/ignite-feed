import './global.css';
import styles from '@/App.module.css'

import {Header} from './Components/Header/Header';
import {Sidebar} from  './Components/Sidebar/Sidebar'
import {Post} from './Components/Post/Post'
import {Comment} from './Components/Comment/Comment'
function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
            <Post/>
        </main>
      </div>
    </div>  
  )
}

export default App;
