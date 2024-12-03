import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react';

import {Avatar} from '@/Components/Avatar/Avatar'

export function Sidebar(){

    return(
        <aside className={styles.sidebar}>
            <img  className={styles.cover} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsmc0P_lR1DnfV-O4fChPOr2sdJucOnVrUg&s"></img>
            
            <div className={styles.profile}>
                <Avatar 
                    src="https://conteudo.imguol.com.br/c/noticias/2013/09/02/nas-redes-sociais-gato-com-cara-de-triste-atrai-milhares-de-seguidores-1378162490423_300x300.jpg.webp"
                    hasBorder={true}    
                />
                <strong>Estefane Andrade</strong>
                <span>Front End Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>      
            </footer>
        </aside>
    )

}