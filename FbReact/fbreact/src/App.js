import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Funccomponent from './components/funccomponent'

import Conditional from './components/conditional';
import Events from './components/events';
import List from './components/list';
import Lifecycle from './components/lifecycle';

import Errorexample from './components/errorexample';
import Errorboundary from './components/errorboundary';
import Clickme from './components/clickme';
import Hoverme from './components/hoverme';
import Counter from './components/counter';
import Userlist from './components/userlist';
import Productslist from './components/productslist';
import HocList from './components/HocList';
import Rendername from './components/rendername';
import HovermeRenderprops from './components/hovermeRenderprops';
import RefExample from './components/refExample';
import RefClassCompExample from './components/refClassCompExample';
import ParentComp from './components/parentComp';
import {Routes,Route} from 'react-router-dom'
import Home from './components/home';
import Login from './components/login';
import Navbar from './components/navbar';
import Services from './components/services';
import Fallbackpage from './components/fallbackpage';
function App() {
  let name="Rahul"
  let loggedIn="not LoggedIn";
  let age=25;
  const htmlhead= <h1>hey there!</h1>

  const user =[
    {
        id:1,
        name:'Rajat'
    },
    {
        id:2,
        name:'Vedant'
    }
]

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>}></Route>

        <Route path='/ourservices' element={<Services/>}>
       

        </Route>

        <Route path='/ourservices/newservice' element={<Header/>}/>
        <Route path='*' element={<Fallbackpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
