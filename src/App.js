import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
function App() {
  const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  return (
    <>
      <Navbar/>
      <Home/>
    </>
  );
}

export default App;
