import styles from './ProjectCard.module.css'
import Project1 from '../../assets/images/projects/project-1.jpg'
import Project2 from '../../assets/images/projects/project-2.jpg'
import Project3 from '../../assets/images/projects/project-3.jpg'
import Project4 from '../../assets/images/projects/project-4.jpg'
import Project5 from '../../assets/images/projects/project-5.jpg'
import Project6 from '../../assets/images/projects/project-6.jpg'
const ProjectCard = () => {
    return (
        <div className={styles.projectCardContainer}>
            <div className={styles.projectImgContainer}>
                <div className={styles.overlay}></div>
                <img src={Project1} className={styles.projectImg} />
                <div className={styles.boxImg}>
                    <h3>مشاوره مدیریتی</h3>
                    <p>کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                </div>
            </div>
            <div className={styles.projectImgContainer}>
                <div className={styles.overlay}></div>
                <img src={Project2} className={styles.projectImg} />
                <div className={styles.boxImg}>
                    <h3>شرکت های حقوقی </h3>
                    <p>کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                </div>
            </div>
            <div className={styles.projectImgContainer}>
                <div className={styles.overlay}></div>
                <img src={Project3} className={styles.projectImg} />
                <div className={styles.boxImg}>
                    <h3> مشاوره مدیریتی  </h3>
                    <p>کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                </div>
            </div>
            <div className={styles.projectImgContainer}>
                <div className={styles.overlay}></div>
                <img src={Project4} className={styles.projectImg} />
                <div className={styles.boxImg}>
                    <h3>پروژه سهامی خاص   </h3>
                    <p>کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                </div>
            </div>
            <div className={styles.projectImgContainer}>
                <div className={styles.overlay}></div>
                <img src={Project5} className={styles.projectImg} />
                <div className={styles.boxImg}>
                    <h3>خرده فروشی   </h3>
                    <p>کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                </div>
            </div>
            <div className={styles.projectImgContainer}>
                <div className={styles.overlay}></div>
                <img src={Project6} className={styles.projectImg} />
                <div className={styles.boxImg}>
                    <h3>هتل   </h3>
                    <p>کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                </div>
            </div>
        
        </div>
    )
}

export default ProjectCard;