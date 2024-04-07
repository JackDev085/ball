import './module.Treinos.css'

import React from 'react';
import { useParams } from 'react-router-dom';



function Treinos() {
    const teste = [
        {
            "img": "https://cdn.vanguardngr.com/wp-content/uploads/2023/10/Giannis-Antetokoumpo-1536x864.webp",
            "titulo": "Rotina de condicionamento",
            "endpoint":'rotinaCondicionamento',
            "descricao": "30 min",
            "tipo": "condicionamento",
        },
        {
            "img": "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/12/curry_warriors-e1702929101942.jpeg?w=829&h=468&crop=1",
            "titulo": "Rotina de arremesso",
            "endpoint":'rotinaArremesso',
            "descricao": "15 min",
            "tipo": "arremesso",
        },
        {
            "img": "https://www.infolivros.org/wp-content/uploads/2021/08/livros-basquetebol.webp?ezimgfmt=ngcb2/notWebP",
            "titulo": "Como pensar em quadra?",
            "endpoint":'rotinaDrible',
            "descricao": "-",
            "tipo": "estudo",
        },
        {
            "img": "https://jumperbrasil.com.br/wp-content/uploads/2024/01/Kyrie-Irving_Easy-Resize.com_.jpg",
            "titulo": "Rotina de drible",
            "endpoint":'livro',
            "descricao": "20 min",
            "tipo": "drible",
        }
    ]
    const { tipoTreino } = useParams();
    return (
        <section class="treinos-class">
            <h1>/<strong className='op6'>/</strong><strong className='op3'>/</strong> {tipoTreino}</h1>
            <p>Lista de treinos para {tipoTreino}</p>

            <div className="treinos">

                {teste.filter((treino) => tipoTreino === treino.tipo) //filtra os treinos com base no tipo
                .map((treino,index) => (
                        <div className="treino" key={index}>
                            <img src={treino.img}
                                alt={treino.titulo} />
                            <div className="info">
                                <h2>{treino.titulo}</h2>
                                <p>{treino.descricao}</p>
                            </div>
                            <a href={`/exercicios/${treino.endpoint}`}>{'>'}</a>
                        </div>

                ))}

            </div>
        </section>
    )
}
export default Treinos