import { Comment } from "../components/Comment"
import styles from "./Post.module.css"
import { Avatar } from "./../components/Avatar"

import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

// eslint-disable-next-line react/prop-types
export function Post({author,content,publishedAt}){

    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'às' HH:mm 'h'",{locale:ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix:true
    })
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
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {
                    content.map(line=>{
                        if(line.type ==='paragraph'){
                            return(
                                <p>{line.content}</p>
                            )
                        }else if(line.type==='link'){
                            return(
                                <p><a href="#">{line.content}</a></p>
                            )
                        }
                    })

                }
              
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                placeholder="Deixe seu comentario"></textarea>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className="styles.commentList">
                <Comment/>
            </div>
            
        </article>  
    )
}