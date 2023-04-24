import './App.css';
import Card from './Components/Card'

function App() {
  return (
    <div className="App">
     
  <Card designation="work in frontend technologies like ... html, css, javascript" name='vaishnavi chatur' jobdes='Web developer' link="./images.jpg"/>
  <br></br>
  <Card designation="work in database technologies like ... sql Server" name='Piya Khanna' jobdes='Database developer' link="./girl.jpg"/>
  <br></br>
  <Card designation="work in backend technologies like ... jsp, hibernate, MVC" name='Leena Gupta' jobdes='backend developer' link="./girll.jpg"/>
  
  
    </div>
  );
}

export default App;
