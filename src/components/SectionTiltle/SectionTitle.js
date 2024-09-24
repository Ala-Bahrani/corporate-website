import styles from './SectionTitle.module.css'
const SectionTitle = (props) =>{
    return(
        <div>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
    )
}
export default SectionTitle;