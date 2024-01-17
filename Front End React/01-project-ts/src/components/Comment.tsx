import {ThumbsUp, Trash} from '@phosphor-icons/react'
import styles from "./Comment.module.css"
import { Avatar } from './Avatar'
import { useState } from 'react'


interface CommentProps{
    content:string
    onDeleteComment:(coment:string)=>void
}

export function Comment({content,onDeleteComment}:CommentProps){

    const [likeCount,setLikeCount]=useState(0)

    function handleLikeComment(){
       setLikeCount((state)=>{
        return state+1
       })
       
    }
    function handleDeletComment(){
        onDeleteComment(content)
        console.log("tentei deletar")
    }
   
    return (
        <div className={styles.comment}>
            <Avatar
             src='https://avatars.githubusercontent.com/u/123670251?s=400&u=e5737fa43123a91377d0cd06eead7b3b6363bd9c&v=4'/>
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igor Paiva</strong>
                            <time title="5 de dezembro as 17:27h" dateTime="2023-05-12 17:27:00">Publicado a  1h</time>
                        </div>

                        <button onClick={handleDeletComment} title="Deletar comentario">
                            <Trash size={15}/>
                        </button>

                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span> {likeCount} </span>
                    </button>  
                </footer>
            </div>
            
        </div>

    )
}