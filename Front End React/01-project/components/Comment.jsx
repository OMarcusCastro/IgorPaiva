import {ThumbsUp, Trash} from '@phosphor-icons/react'
import styles from "./Comment.module.css"
import { Avatar } from './Avatar'

export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar link='https://avatars.githubusercontent.com/u/123670251?s=400&u=e5737fa43123a91377d0cd06eead7b3b6363bd9c&v=4'/>
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igor Rego</strong>
                            <time title="5 de dezembro as 17:27h" dateTime="2023-05-12 17:27:00">Publicado a  1h</time>
                        </div>

                        <button title="Deletar comentario">
                            <Trash size={15}/>
                        </button>

                    </header>
                    <p>Muito bom!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span> 20 </span>
                    </button>  
                </footer>
            </div>
            
        </div>

    )
}