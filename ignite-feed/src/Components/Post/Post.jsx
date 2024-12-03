import { format, formatDistanceToNow } from 'date-fns'
import  ptBr from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'

import {Comment} from '../Comment/Comment'
import {Avatar} from '@/Components/Avatar/Avatar'

export function Post (props){

    const publishedDateFormatted = format(props.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    });


    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBr,
        addSuffix: true,
    })

    
    return(
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                <Avatar 
                    src={props.author.avatarUrl}
                    hasBorder={true}
                />                
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>

            </header>

            <div className={styles.content}>
                    {props.content}
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
                
            </div>
        </article>
    
    )
}