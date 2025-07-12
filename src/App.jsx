
import './App.css';
import {Greeting} from './parts/MainGreeting';
import {MainMessage} from './parts/MainMessage';
import {Button} from './parts/MainButton';


function App() {
const clicked = () => {
  console.log('CLICKED');
}
  return (
    <>
      <Greeting name="Luca" />
      <MainMessage name="Luca" text="ça va?" />
     <Button onClick={clicked}></Button>
    </>
  );
}

export default App;
