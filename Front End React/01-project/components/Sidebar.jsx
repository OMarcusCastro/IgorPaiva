import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import {PencilSimpleLine} from "@phosphor-icons/react"

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=3893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className={styles.cover} />

            <div className={styles.profile}>
                <Avatar hasBorder link ="https://avatars.githubusercontent.com/u/123670251?s=400&u=e5737fa43123a91377d0cd06eead7b3b6363bd9c&v=4"/>
                <strong>Igor Paiva</strong>
                <span>Front-end Developer</span>
            </div>
            <div>
                <footer>
                    <a href='https://www.google.com/'>
                        <PencilSimpleLine size={16} />
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}