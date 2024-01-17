import Ignatelogo from "../assets/Ignitelogo.svg"
import styles from "./Header.module.css"

export function Header(){
    return (
        <header className={styles.header}>
            <img src={Ignatelogo} alt= "Logo"></img>
            <strong>Igor Feed</strong>
        </header>
    )
}