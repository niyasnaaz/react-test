import { Route, Routes } from 'react-router-dom';
import './App.css';
import Design1 from './pages/Design1';
import Design2 from './pages/Design2';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Design1/>} />
      <Route path='design2' element={<Design2/>} />
      </Routes>

    </div>
  );
}

export default App;
