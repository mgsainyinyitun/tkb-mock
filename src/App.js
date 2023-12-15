import { useState } from 'react';
import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';

function App() {
  const [date,setDate] = useState();
  return (
    <div id='container'>
      <Header  setDate={setDate}/>
      <Body date={date}/>
    </div>
  );
}

export default App;
