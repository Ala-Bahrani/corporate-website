
import { Link } from 'react-router-dom';
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <Link to={props.to} className={`${styles.btn} ${props.className}`}>
            {props.children}
        </Link>
    )
}

export default Button;