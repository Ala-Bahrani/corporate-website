import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTiltle/SectionTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from '../../components/Button/Button'
import styles from './Projects.module.css'


const Projects = () => {
    return (
        <section className={styles.section} id="projects">
            <Container>
                <SectionTitle title='پروژه ها' />
                <div className={styles.cardsContainer}>
                    <ProjectCard />

                </div>
                <div className={styles.btnMoreProject}>
                    <Button>بیشتر</Button>
                </div>
            </Container>
        </section>
    )
}

export default Projects;