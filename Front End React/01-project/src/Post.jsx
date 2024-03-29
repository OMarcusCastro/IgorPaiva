import styles from "./Post.module.css"
import { Comment } from "../components/Comment"
import { Avatar } from "./../components/Avatar"
import { useState } from "react"
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'




// eslint-disable-next-line react/prop-types
export function Post({author,content,publishedAt}){
    
    const [comments,setComments]=useState([
        'brewdog','fluminense vai toma no cu'
    ])



    const [newCommentText,setNewCommentText]=useState('')
    const isNewCommentEmpty = newCommentText.length === 0

    const publishedDateFormated = format(publishedAt,"d 'de' LLLL 'às' HH:mm 'h'",{locale:ptBR})
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix:true
    })

    function handleCreateNewCommet(){
        event.preventDefault()
        setComments([...comments,newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)

    }

    function deleteComment(commentToDelete){
        //imutabilidade - > voce nao muda uma variaval mas cria outra nova(um novo local de memoria com o novo estado)
        const commentsWithoutDeletedOne =comments.filter(comment=>{
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
        
    }
    
    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo e obrigatorio!')
        console.log(event)
    }
    
    return (
        <article className={styles.post}>
            <header>                                       
                
                <div className={styles.author}>
                    <Avatar hasBorder link={author.avatarUrl}/>
                       <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {
                    content.map(line=>{
                        if(line.type ==='paragraph'){
                            return(
                                <p key={line.content}>{line.content}</p>
                            )
                        }else if(line.type==='link'){
                            return(
                                <p key={line.content}><a href="#">{line.content}</a></p>
                            )
                        }
                    })

                }
              
            </div>
            <form onSubmit={handleCreateNewCommet} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                
                name="comment"
                placeholder="Deixe seu comentario"
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
                />
                
                
                <footer>
                    <button type="submit" disabled={false}>Publicar</button>
                </footer>
            </form>
            <div className="styles.commentList">
               {
               comments.map(comment => {
                    return( <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                        />)
               })
                }
                
            </div>
            
        </article>  
    )
}