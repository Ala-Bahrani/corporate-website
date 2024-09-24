import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTiltle/SectionTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactImg from '../../assets/images/contact/contact.jpg'
import styles from './Contact.module.css'
const Contact = () => {
    return (
        <section className={styles.section} id="contact">
            <SectionTitle title="ارتباط با ما" />

            <Container >
                <div className={styles.contactContainer}>
                    <div className={styles.contactImg}>
                        <img src={ContactImg} />
                    </div>
                    <div className={styles.contactForm}>
                        <ContactForm />
                    </div>
                </div>

            </Container>

        </section>
    )
}

export default Contact;