import "./module.Main.css"
import { Link } from "react-router-dom"
import Footer from "../Footer"
function Main() {
  return (
    <div className="init">
      <div class="img">
        <img src="imgs/logo1.png" alt="" />
      </div>
      <div class="main">
        <h1><em>"É preciso se atrever a ser grande", </em>Kobe Bryant.</h1>
        <p>Afim de melhorar no basquete? Você está no lugar certo. Ponha o cinto e o capacete e vamo fazer acontecer.</p>
        <Link to="/main">Let's Go Baby🏀</Link>
      
      </div>
      <Footer/>
      </div>
  )
}
export default Main
