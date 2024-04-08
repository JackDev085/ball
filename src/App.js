import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/index"
import Treinos from "./components/Treinos/index"
import Exercicios from "./components/Exercicios/index"
import NotFound from './components/NotFound';
import Teste from './components/Teste';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/exercicios/:nomeExerc" element={ <Exercicios/> } />
        <Route path="/treinos/:tipoTreino" element={ <Treinos /> } />
        <Route path="/teste" element={ <Teste /> } />
        
        { <Route path="*" element={ <NotFound /> } /> }
      </Routes>
    </Router>
  );
}
export default App;
