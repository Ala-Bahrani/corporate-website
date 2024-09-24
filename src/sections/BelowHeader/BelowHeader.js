import heroImage from '../../assets/images/hero.jpg'
import HeroData from '../../components/HeroData/HeroData';
import styles from './BelowHeader.module.css'
const BelowHeader = () => {
    return (
        <div className={styles.belowHeaderContainer}>
            <img src={heroImage} />
            <div className={styles.overlay}>
                <HeroData />
            </div>

        </div>
    )
}

export default BelowHeader;