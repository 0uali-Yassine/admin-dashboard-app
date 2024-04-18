import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import List from './pages/List/List';
import Single from './pages/Single/Single';
import New from './pages/New/New';
import {userInputs} from './formSource';
import { productInputs } from "./formSource";
import './style/dark.scss';
import './style/breakpoint.css';
import { useGlobalContext } from "./Context";
import Muidrawer from "./component/muidrawer/Muidrawer.jsx";


function App() {
  const {darkMode} =useGlobalContext();
  return (
    <div className={`app ${darkMode && 'dark'}`}>
     <BrowserRouter>
      <Muidrawer/>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          
          <Route path='users'>
            <Route index element={<List title='Add New User' src='/users/new'/>} />
            <Route path=':userId' element={<Single/>} />
            <Route path='new' element={<New inputs={userInputs} title="Add New User"/>} />
          </Route>

          <Route path='products'>
            <Route index element={<List title='Add New Product' src='/products/new'/>} />
            <Route path=':productId' element={<Single/>} />
            <Route path='new' element={<New  inputs={ productInputs} title="Add New Product"/>} />
          </Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
