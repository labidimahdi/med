import { Routes, Route} from 'react-router-dom'
import Connexion from './pages/Connexion';
import HomePage from './pages/HomePage'
import SignUp from './pages/SingUp';
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Connexion/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    
    </>
  );
}

export default App;
