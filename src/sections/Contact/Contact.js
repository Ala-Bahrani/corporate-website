import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTiltle/SectionTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactImg from '../../assets/images/contact/contact.jpg'
import styles from './Contact.module.css'
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className={styles.section} id="contact">
            <SectionTitle title="ارتباط با ما" />

            <Container>
                <div className={styles.contactContainer}>

                    {/* تصویر از سمت چپ */}
                    <motion.div
                        className={styles.contactImg}
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={ContactImg} alt="Contact" />
                    </motion.div>

                    {/* فرم از سمت راست */}
                    <motion.div
                        className={styles.contactForm}
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ContactForm />
                    </motion.div>

                </div>
            </Container>

        </section>
    )
}

export default Contact;
