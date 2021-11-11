import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignInComponent from './components/SignInComponent';
import SignUpComponent from './components/SignUpComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignInComponent />} />
        <Route path='/register' element={<SignUpComponent />} />
        <Route path='/home' element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;

//add routing
