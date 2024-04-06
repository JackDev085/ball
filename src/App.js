import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/index"
import Treinos from "./components/Treinos/index"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        {/* <Route path="/exercicios" element={ <Exercicios/> } /> */}
        <Route path="/treinos" element={ <Treinos /> } /> */

        {/* <Route path="*" element={ <NotFound /> } /> */}
      </Routes>
    </Router>
  );
}
export default App;
