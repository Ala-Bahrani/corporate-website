
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from './TopHeader.module.css'
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";

const TopHeader = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerContent}>
                    <div className={styles.headerRight}>
                        BATAB
                    </div>
                    <div className={styles.headerCenter}>
                        <div className={styles.contantItem}>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                                <span>ایمیل</span>
                            </div>
                            <p>example@yahoo.com</p>
                        </div>
                        <div className={styles.contantItem}>
                            <div>
                                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                                <span>تلفن</span>
                            </div>
                            <p>021-2220011</p>
                        </div>
                    </div>
                    <div className={styles.headerLeft}>
                        <Button>مشاوره رایگان</Button>
                    </div>
                </div>
                <div className={styles.tabletContactInfo}>
                    <div className={styles.mobileContactItem}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                        <span>ایمیل: </span>
                        <span>example@yahoo.com</span>
                    </div>
                    <div className={styles.mobileContactItem}>
                        <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                        <span>تلفن: </span>
                        <span>021-2220011</span>
                    </div>
                </div>

            </Container>


        </header>
    )
}

export default TopHeader;