
import './App.css';
import Loginpennal from './pages/Loginpennal';
import Carddetail from './components/Carddetail';
import Signuppennal from './pages/Signuppennal';
import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div >
      <>
     
      <Routes>
        <Route path='/' element={<Signuppennal />}></Route>
        <Route path='/login' element={<Loginpennal />}></Route>
       
      </Routes>
      <Header />
      <Routes>
      <Route path='/home' element={<Home />}></Route>
        <Route path='/carddetail/:id' element={<Carddetail />}></Route>
      </Routes>
      </>
    </div>
  );
}

export default App;

