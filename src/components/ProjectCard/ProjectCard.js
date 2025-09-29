import styles from './ProjectCard.module.css'
import { motion } from "framer-motion";
import Project1 from '../../assets/images/projects/project-1.jpg'
import Project2 from '../../assets/images/projects/project-2.jpg'
import Project3 from '../../assets/images/projects/project-3.jpg'
import Project4 from '../../assets/images/projects/project-4.jpg'
import Project5 from '../../assets/images/projects/project-5.jpg'
import Project6 from '../../assets/images/projects/project-6.jpg'

const projects = [
    { img: Project1, title: "مشاوره مدیریتی", desc: "کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد" },
    { img: Project2, title: "شرکت های حقوقی", desc: "کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد" },
    { img: Project3, title: "مشاوره مدیریتی", desc: "کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد" },
    { img: Project4, title: "پروژه سهامی خاص", desc: "کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد" },
    { img: Project5, title: "خرده فروشی", desc: "کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد" },
    { img: Project6, title: "هتل", desc: "کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد" },
];

const ProjectCard = () => {
    return (
        <div className={styles.projectCardContainer}>
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className={styles.projectImgContainer}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }} // هر کارت با کمی فاصله ظاهر میشه
                >
                    <div className={styles.overlay}></div>
                    <img src={project.img} className={styles.projectImg} />
                    <div className={styles.boxImg}>
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default ProjectCard;
