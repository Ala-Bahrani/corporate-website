
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Batab from './pages/Batab';
import './styles/style.css'
import TopHeader from './sections/TopHeader/TopHeader';
import MainHeader from './sections/MainHeader/MainHeader';

function App() {
  return (
    <div className="App">
      <Router basename="/corporate-website">
         <TopHeader/>
         <MainHeader/>
        <Routes>
          <Route path='/' element={<Batab/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
