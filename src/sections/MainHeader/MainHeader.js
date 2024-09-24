import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from './MainHeader.module.css'
const MainHeader = () =>{
    return(
        <header className={styles.header}>
              <Container>
                    <div className={styles.headerContent}>
                        <Navbar/>
                        <SearchBar/>
                    </div>
              </Container>
        </header>
    )
}

export default MainHeader;