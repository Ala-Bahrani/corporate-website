
import styles from './BlogCard.module.css'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
const BlogCard = (props) => {
    return (
        <div className={styles.cardContainer}>
            <img src={props.img} className={styles.cardImg} />
            <div className={styles.cardContent}>
                <p className={styles.cardText}>{props.text}</p>
            </div>
            <div className={styles.cardFooter}>

                <div className={styles.cardFooterRight}>
                    <span className={styles.cardNumber}>{props.numberComment}</span>
                    <FontAwesomeIcon icon={faComment} className={styles.cardIcon} />
                    <span className={styles.cardName}>{props.author}</span>

                </div>
                <Button>بیشتر</Button>
            </div>
        </div>
    )
}

export default BlogCard;