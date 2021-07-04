import './App.css';
import axios from 'axios';
import {useState} from 'react';

function App() {
  const [data1, setData1] = useState('init');
  const fetch = async () => {
    const res = await axios.get('https://github.com/fake?q=www123');
    setData1(res.data.message);
  };

  return (
    <div className="App">
      <div>
        {data1}
      </div>
      <button onClick={fetch}>fetch</button>
    </div>
  );
}

export default App;
