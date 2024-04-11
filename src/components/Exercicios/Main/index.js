import "./module.Main.css"
import { Link } from "react-router-dom"
function Main() {
  return (
    <>
      <div class="img">
        <img src="imgs/logo.png" alt="" />
      </div>
      <div class="main">
        <h1><em>"É preciso se atrever a ser grande", </em>Kobe Bryant.</h1>
        <p>Afim de melhorar no basquete? Você está no lugar certo. Ponha o cinto e o capacete e vamo fazer acontecer.</p>
        <Link to="/main">Let's Go Baby🏀</Link>
      
      </div>
      </>
  )
}
export default Main
