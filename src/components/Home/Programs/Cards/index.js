import Card from "../Card/index"
function Cards() {
  return (
    <div className="cards">
      
        <Card
          img="https://i.pinimg.com/564x/d5/e7/b1/d5e7b1e1128288acc8980ffa1560f42d.jpg"
          titulo="Arremesso"
          descricao="Melhore seu arremesso"
          type="arremesso"
        />
     
      <Card
        img="https://i.pinimg.com/564x/c6/22/0a/c6220a109aed3d7ddcadad12b6aeeeb8.jpg"
        titulo="Drible"
        descricao="Melhore seu drible"
        type="drible"
      />

      <Card
        img="https://i.pinimg.com/564x/35/2e/9a/352e9ab61db348264161406eccfe08d3.jpg"
        titulo="Condicionamento"
        descricao="Melhore seu condicionamento"
        type="condicionamento"
      />

      <Card
        img="https://i.pinimg.com/564x/24/21/1c/24211c05260317db1f9c4e67046a1e5e.jpg"
        titulo="Estudo"
        descricao="Conteúdos para estudar"
        type="estudo"
      />
    </div>




  )

}
export default Cards