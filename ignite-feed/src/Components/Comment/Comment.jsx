import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';
import {ThumbsUp, Trash} from 'phosphor-react';

export function Comment (){
    return(

        <div className={styles.comment}>
            <div>           
                <Avatar 
                    src="https://i.redd.it/meu-gato-%C3%A9-praticamente-o-gato-do-meme-v0-n9dleoj8dgfc1.jpg?width=720&format=pjpg&auto=webp&s=426eb562eddf7898e5ba777104b7065552be8114"
                    hasBorder={false}
                />    
            </div>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.nameAndTime}>
                            <strong>Estefane Andrade (você)</strong> 
                            <time title="02 de Dezembro às 13:30h" dateTime="2024-02-12 13:33:05">Publicado há 3 minutos</time>
                        </div>
                        <button title="Excluir comentário">
                            <Trash size={25}/>
                        </button>
                    </header>

                    <p>Muito bom, Devon, parabéns pela conquista!! </p>

                </div>
                <footer >
                        <button>
                            <ThumbsUp size={20}/>
                            Curtir <span>36</span>
                        </button>
                    </footer>

            </div>
        </div>
    )
}