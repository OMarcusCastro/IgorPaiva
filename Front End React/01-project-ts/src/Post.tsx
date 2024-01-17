import styles from "./Post.module.css"
import { Comment } from "./components/Comment"
import { Avatar } from "./components/Avatar"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"
import {format, formatDistance, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface Author{
    name:string
    role:string
    avatarUrl:string
}

interface Content{
    type: 'paragraph' | 'link'
    content:string
}

export interface PostType{
    id: number
    author:Author
    content:Content[]
    publishedAt:Date
}

interface PostProps{
    post:PostType
}


export function Post({post}:PostProps){
    
    const [comments,setComments]=useState([
        'brewdog','fluminense vai toma no cu'
    ])



    const [newCommentText,setNewCommentText]=useState('')
    const isNewCommentEmpty = newCommentText.length === 0

    const publishedDateFormated = format(post.publishedAt,"d 'de' LLLL 'às' HH:mm 'h'",{locale:ptBR})
    
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt,{
        locale:ptBR,
        addSuffix:true
    })

    function handleCreateNewCommet(event:FormEvent){
        event.preventDefault()
        setComments([...comments,newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)

    }

    function deleteComment(commentToDelete:string){
        //imutabilidade - > voce nao muda uma variaval mas cria outra nova(um novo local de memoria com o novo estado)
        const commentsWithoutDeletedOne =comments.filter(comment=>{
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
        
    }
    
    function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo e obrigatorio!')
        console.log(event)
    }
    
    return (
        <article className={styles.post}>
            <header>                                       
                
                <div className={styles.author}>
                    <Avatar hasBorder src={post.author.avatarUrl}/>
                       <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {
                    post.content.map(line=>{
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
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
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