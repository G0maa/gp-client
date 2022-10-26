import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [count, setCount] = useState(0);

  const clickBtn = async () => {
    const res = await axios.get('https://myschool.deta.dev/api/ping');
    console.log(res);
    setCount(count + 1);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => clickBtn()}>Click to send request</button>
      </div>
    </div>
  );
};

export default App;
