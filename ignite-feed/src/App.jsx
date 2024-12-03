import './global.css';
import styles from '@/App.module.css'

import {Header} from './Components/Header/Header';
import {Sidebar} from  './Components/Sidebar/Sidebar'
import {Post} from './Components/Post/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2024/08/Destaque-Gato-triste-IA.jpg',
      name: 'Julia Álvarez',
      role: 'Back End Developer'
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    publishedAt: new Date('2024-12-01 16:30:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmoirZbxTLNy19HywDvFM5FYsd9f-vyixGqVaqrSqxMQk_szwu0f84vrSAL_Tdms2d3E&usqp=CAU',
      name: 'Roger Ferreira',
      role: 'Data Analyst',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    publishedAt: new Date('2024-11-30 16:30:00'),
  }
]

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>  
  )
}

export default App;
