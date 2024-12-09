import { useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns'
import  ptBr from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'

import {Comment} from '../Comment/Comment'
import {Avatar} from '@/Components/Avatar/Avatar'

export function Post (props){

    const [newCommentText, setNewCommentText] = useState('')


    const [comment, setComments] = useState([
        'Bom saber! Aguardando as próximas novidades :)'
    ])

    const publishedDateFormatted = format(props.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    });


    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBr,
        addSuffix: true,
    })

    function handleAddNewComment(){
        event.preventDefault();
        setComments([...comment, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value);
    }
    
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

            <form onSubmit={handleAddNewComment} className={styles.newComment}>

                <strong>Deixe seu feedback</strong>

                <textarea
                    name="commentContent"
                    placeholder="Deixe um comentário"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comment.map((comment) => <Comment content={comment}/>)}
            </div>
        </article>
    
    )
}