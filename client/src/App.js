import axios from 'axios';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';
import Dashboard from './components/Dashboard';
import AddStore from './components/AddStore';


function App() {

  useEffect(() => {
    axios.get('http://localhost:8000/api/stores')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="api/stores/create" element={<AddStore />} />
      </Routes>
    </div>
  );
}

export default App;
