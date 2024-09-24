
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './LeftServicesItem.module.css'
import Container from "../Container/Container";

const LeftServicesItem = (props) => {
    return (
        <div className={props.className}>
            <article className={styles.servicesContainer}>
                <FontAwesomeIcon icon={props.icon} className={styles.servicIcon} />
                <p>{props.text}  </p>
            </article>
        </div>

    )
}

export default LeftServicesItem;