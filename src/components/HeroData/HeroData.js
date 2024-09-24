
import Button from '../Button/Button';
import styles from './HeroData.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroData = () => {
    return (
        <div className={styles.heroDataContainer}>
            <p>به سایت باتاب خوش آمدید</p>
            <h3>ما بهترین آژانس مشاوره هستیم</h3>
            <div className={styles.heroBtnContainer}>
                <Button className={styles.heroBtn}>
                    <FontAwesomeIcon icon={faArrowRight} />
                    خدمات ما
                </Button>
            </div>
        </div>
    )
}

export default HeroData;