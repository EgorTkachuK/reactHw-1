import logo from './logo.svg';
import './App.css';
import Greeting from './greeting';
import Message from './message';
import Button from './button';


function App() {
  const clicked = () => {
    console.log('You pressed the button!!!!');
  };
  return (
    <div className="App">
      <Greeting name="Yehor" />
      <Message name="Yehor" text="ça va?" />
     <Button onClick={clicked}></Button>
    </div>
  );
}

export default App;
