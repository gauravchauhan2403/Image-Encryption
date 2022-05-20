import './App.css';
import Main from  './Components/Main';
import { Route, Routes } from "react-router-dom";
import Encrypt from './Components/Encrypt.js';
import Decrypt from './Components/Decrypt';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Main />} />
        <Route path="encrypt" element={<Encrypt />} />
        <Route path="decrypt" element={<Decrypt />} />
      </Routes>
    </div>
  );
}

export default App;
