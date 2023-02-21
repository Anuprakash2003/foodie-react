import logo from './logo.svg';
import LoginPage from './pages/LoginPage';
import Card from './pages/Card';
import RestaurantPage from './pages/RestaurantPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    return (

      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/card" element={<RestaurantPage/>}/>
            <Route/>
            
        </Routes>
      </BrowserRouter>
       
    );
}

export default App;