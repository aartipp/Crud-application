import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpEdit from './EmpEdit';
import EmpDetails from './EmpDetails';
import EmpCreate from './EmpCreate';

function App() {
  return (
    <div className="App">
     <h1>React Crud Operation</h1>
     <BrowserRouter>
  <Routes>
    <Route path="/" element={<EmpListing></EmpListing>}></Route>   
     <Route path="/employee/create" element={<EmpCreate></EmpCreate>}></Route>
    <Route path="/employee/edit/:empid" element={<EmpEdit></EmpEdit>}></Route>

  </Routes>
  </BrowserRouter>
    </div>
  );
  
}

export default App;
