
import Button from '../Button/Button';
import styles from './HeroData.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const HeroData = () => {
    return (
        <motion.section
            initial={{ opacity: 0, x: -100 }}      // وضعیت اولیه (پنهان و کمی سمت چپ)
            whileInView={{ opacity: 1, x: 0 }}     // وقتی وارد viewport شد
            viewport={{ once: false, amount: 0.3 }} // once: false => هر بار اجرا میشه، amount: حداقل 30% المان دیده شود
            transition={{ duration: 0.8 }}          // مدت زمان انیمیشن
        >
            <div className={styles.heroDataContainer} >
                <p>به سایت باتاب خوش آمدید</p>
                <h3>ما بهترین آژانس مشاوره هستیم</h3>
                <div className={styles.heroBtnContainer}>
                    <Button className={styles.heroBtn}>
                        <FontAwesomeIcon icon={faArrowRight} />
                        خدمات ما
                    </Button>
                </div>
            </div>
        </motion.section>
    )
}

export default HeroData;