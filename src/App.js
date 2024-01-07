

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
  <Navbar title = "Our App"  About = "AboutOurApp"/>
  <div className="container">
    
  <TextForm heading = "Enter the Text to analyze Below"/>
  </div>
    </>
  );
}

export default App;
