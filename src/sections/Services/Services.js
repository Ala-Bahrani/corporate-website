import styles from './Services.module.css'
import LeftServicesItem from '../../components/LeftServiceItem/LeftServicesItem'
import SectionTitle from '../../components/SectionTiltle/SectionTitle';
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPieChart } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import RightServiceItem from '../../components/RightServiceItem/RightServiceItem';
import Container from '../../components/Container/Container';
const Services = () => {
    return (
        <section className={styles.section} id="services">
            <SectionTitle title='خدمات' />
            <Container>
                <div className={styles.services}>
                    <RightServiceItem className={styles.serviceItem1} text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان " />
                    <LeftServicesItem className={styles.serviceItem2} icon={faUsers} text="کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد" />
                    <LeftServicesItem className={styles.serviceItem3} icon={faPieChart} text="کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد" />
                    <LeftServicesItem className={styles.serviceItem4} icon={faChartLine} text="کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد" />
                    <LeftServicesItem className={styles.serviceItem5} icon={faUsers} text="کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد" />
                </div>
            </Container>
        </section>
    )
}

export default Services;