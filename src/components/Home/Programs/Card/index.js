import { Link } from "react-router-dom"
function Card(props) {
  const {titulo, descricao,img} = props
  return (
    <Link to="/treinos">
      <div className="card">
        <img src={img} alt={descricao} />
        <div>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
      </div>
    </Link>

  )
}
export default Card