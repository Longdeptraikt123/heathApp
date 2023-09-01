import './App.css';
import Navbar from './Page1/Navbar';
import Footer from './Page1/Footer';
import Page1 from './Page1/Page1';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Page1 />}></Route>
        <Route path='/page2' element={<Page2 />}></Route>
        <Route path='/page3' element={<Page3 />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
