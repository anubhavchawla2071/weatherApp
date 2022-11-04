import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route
            exact path="/search"
            element={<Search/>}
          />
        </Routes>
      </Router>
     </>
  );
}

export default App;
