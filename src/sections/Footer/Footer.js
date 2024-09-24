import Container from '../../components/Container/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'
import { useState } from 'react'

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault(); 
      alert(`عضویت با ایمیل ${email} انجام شد!`);
      setEmail(""); 
    };
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerContainer}>
                    <div className={styles.firstColumn}>
                        <h3>درباره ما</h3>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                        </p>
                    </div>
                    <div className={styles.secondColumn}>
                        <h3>لینک ها </h3>
                        <ul className={styles.navlinks}>
                            <li>
                                <a href="#home">صفحه اصلی</a>
                            </li>
                            <li>
                                <a href="#about">درباره ما </a>
                            </li>
                            <li>
                                <a href="#projects">پروژه ها </a>
                            </li>
                            <li>
                                <a href="#services">خدمات </a>
                            </li>
                            <li>
                                <a href="#blog">بلاگ </a>
                            </li>
                            <li>
                                <a href="#contact">تماس با ما </a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.thirdColumn}>
                        <h3>ارتباط با ما  </h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faLocationDot} className={styles.thirdColumnIcon}/>
                                تهران- خیابان- کوچه- پلاک- ساختمان
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} className={styles.thirdColumnIcon}/>
                                021-2220011
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.thirdColumnIcon}/>
                                youremail@email.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottomFooter}>
                    <div className={styles.newsletter}>
                        <h3>عضویت در خبرنامه</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="ایمیل " 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required
                            />
                            <button type="submit">عضویت</button>
                        </form>
                    </div>

                    <div className={styles.socialIcon}>
                        <FontAwesomeIcon icon={faTwitter}  className={styles.icon}/>
                        <FontAwesomeIcon icon={faFacebookF} className={styles.icon}/>
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;