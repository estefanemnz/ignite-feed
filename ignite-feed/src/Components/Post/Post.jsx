import styles from './Post.module.css'
import {Comment} from '../Comment/Comment'

export function Post (){

    return(
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwJ8CO37x77O9tgO5xFOYaOCflGMMI13_0Q&s"></img>
                
                    <div className={styles.authorInfo}>
                        <strong>Estefane Andrade</strong>
                        <span>Front End Developer</span>
                    </div>
                </div>
                <time title="02 de Dezembro às 13:30h" dateTime="2024-02-12 13:33:05">Publicado há 3 minutos</time>

            </header>

            <div className={styles.content}>
                <p>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p>
                        <a href="#">👉 jane.design/doctorcare</a>
                    </p>
                    <p className={styles.hashtags}>
                        <a href="#"> #novoprojeto </a>
                        <a href="#"> #nlw </a>
                        <a href="#"> #rocketseat </a>
                    </p>

                </p>
            </div>

            <form className={styles.newComment}>

                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    
    )
}