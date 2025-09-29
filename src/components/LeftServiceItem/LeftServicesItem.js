import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './LeftServicesItem.module.css'
import { motion } from "framer-motion";

const LeftServicesItem = (props) => {
    return (
        <motion.div
            className={props.className}
            initial={{ scale: 0.8, opacity: 0 }}       // شروع از کوچک و شفاف
            whileInView={{ scale: 1, opacity: 1 }}     // زوم به اندازه اصلی
            viewport={{ once: false, amount: 0.3 }}    // هر بار که دیده شد اجرا بشه
            transition={{ duration: 0.6 }}             // مدت زمان انیمیشن
        >
            <article className={styles.servicesContainer}>
                <FontAwesomeIcon icon={props.icon} className={styles.servicIcon} />
                <p>{props.text}</p>
            </article>
        </motion.div>
    )
}

export default LeftServicesItem;
