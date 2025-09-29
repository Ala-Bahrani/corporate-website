import Button from '../Button/Button'
import styles from './RightServiceItem.module.css'
import { motion } from "framer-motion";

const RightServiceItem = (props) => {
    return (
        <motion.div
            className={props.className}
            initial={{ y: 50, opacity: 0 }}       // از پایین و شفاف
            whileInView={{ y: 0, opacity: 1 }}    // به جای خودش بیاد و ظاهر بشه
            viewport={{ once: false, amount: 0.3 }} // هر بار که دیده شد اجرا بشه
            transition={{ duration: 0.6 }}
        >
            <article className={styles.ServiceItemContainer}>
                <p>{props.text}</p>
                <div className={styles.btnContainer}>
                    <Button>بیشتر</Button>
                </div>
            </article>
        </motion.div>
    )
}

export default RightServiceItem;
