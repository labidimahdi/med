import { Routes, Route} from 'react-router-dom'
import Connexion from './pages/Connexion';
import HomePage from './pages/HomePage'
import SignUp from './pages/SingUp';
import HomePatient from './pages/HomePatient';


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Connexion/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/homepatient" element={<HomePatient/>} />
      </Routes>
    
    </>
  );
}

export default App;
