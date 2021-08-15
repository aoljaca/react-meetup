import './App.css';
import Navbar from './components/Navbar';
import HomeBody from './components/HomeBody';

function App() {
  let isOnHome = true;
  let ageGroup = null;
  function onClick(index) {
    isOnHome = false;
    ageGroup = index;
  }
  if (isOnHome) {
    return (
      <div className="App">
        <Navbar />
        <HomeBody ageGroup={ageGroup} isOnHome={isOnHome} onClick={onClick}/>
      </div>
    )
  }
  return (
    <div className="App">
      <Navbar />
      
    </div>
  );
}

export default App;
