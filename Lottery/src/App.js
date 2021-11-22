import Lottery from './Lottery'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Good Luck!</h1>
      <Lottery />
      <Lottery title='Mini Lotto' maxNum={10} maxBalls={3}/>
    </div>
  );
}

export default App;
