import Card from "../Card/index"
function Cards() {
  return (
    <div className="cards">
      
        <Card
          img="imgs/curry.jpg"
          titulo="Arremesso"
          descricao="Melhore seu arremesso"
          type="arremesso"
        />
     
      <Card
        img="imgs/ja.jpg"
        titulo="Drible"
        descricao="Melhore seu drible"
        type="drible"
      />

      <Card
        img="/imgs/enterrada.jpg"
        titulo="Condicionamento"
        descricao="Melhore seu condicionamento"
        type="condicionamento"
      />

      <Card
        img="/imgs/estudo.jpg"
        titulo="Estudo"
        descricao="Conteúdos para estudar"
        type="estudo"
      />
    </div>




  )

}
export default Cards