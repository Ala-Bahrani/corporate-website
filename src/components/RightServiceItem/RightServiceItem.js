
import Button from '../Button/Button'
import styles from './RightServiceItem.module.css'


const RightServiceItem = (props) => {
    return (

        <div className={props.className}>
            <article className={styles.ServiceItemContainer}>
                <p>{props.text}</p>
                <div className={styles.btnContainer}>
                    <Button>بیشتر</Button>
                </div>
            </article>
        </div>
    )
}

export default RightServiceItem;