import SectionTitle from "../../components/SectionTiltle/SectionTitle";
import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import styles from './About.module.css'
import aboutImage from '../../assets/images/about.jpg'


const About = () => {
    return (
        <section className={styles.section} id="about">
            <SectionTitle title='درباره ما' />
            <Container>
                <div className={styles.aboutContainer}>
                    <img src={aboutImage} alt="about-us image" />
                    <div>
                    <p className={styles.aboutDescription } >
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <div className={styles.aboutBtnContainer}>
                            <Button>بیشتر</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default About;