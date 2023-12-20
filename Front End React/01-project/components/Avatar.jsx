import styles from "./Avatar.module.css"

export function Avatar({hasBorder,link}){

    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={link}
        />
    )
}