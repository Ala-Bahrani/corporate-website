import styles from './Circle.module.css'
const Circle = (props) =>{
    return(
        <div className={styles.circleContainer}>
            {props.children}
        </div>
    )
}

export default Circle