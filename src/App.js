import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbars from './Components/Navbar';
import Home from './Components/Home';
import SignIn from './Components/login';
import Service from './Components/Service';
import Upload from './Components/Upload';
import Scan from './Components/Scan';
import ScanTest from './Components/ScanTest';
import Result from './Components/Result';
import SignUp from './Components/signup'
import Forms from './Components/Form'
import Dashboard from './Components/Dashboard';
import DasshboardTest from './Components/DashboardTest';
import Place from './Components/Place';
import AboutUs from './Components/AboutUs';
import DashboardMock from './Components/DashboardMock';
import NewDash from './Components/NewDash';
import DashLast from './Components/DashLast';


function App() {
  return (
    <div className="App">
      <Navbars/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Forms/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Upload' element={<Upload/>}/>
        <Route path='/Scan' element={<Scan/>}/>
        <Route path='/ScanTest' element={<ScanTest/>}/>
        <Route path='/Result' element={<Result/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/DashboardTest' element={<DasshboardTest/>}/>
        <Route path='/Place' element={<Place/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/DashboardMock' element={<DashboardMock/>}/>
        <Route path='/:lang'/>
        <Route path='/NewDash' element={<NewDash/>}/>
        <Route path='/DashLast' element={<DashLast/>}/>
      </Routes>
    </div>
  );
}

export default App;
