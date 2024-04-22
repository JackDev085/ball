import './module.Treinos.css'

import React from 'react';
import { useParams } from 'react-router-dom';



function Treinos() {
    const teste = [
        {
            "img": "/imgs/giannis.webp",
            "titulo": "Rotina de condicionamento",
            "endpoint": 'rotinaCondicionamento',
            "descricao": "20 min",
            "tipo": "condicionamento",
        },
        {
            "img": "/imgs/curry-arremesso.webp",
            "titulo": "Média distância - 1",
            "endpoint": 'mediaDistancia',
            "descricao": "30 min",
            "tipo": "arremesso",
        },
        // {
        //     "img": "https://www.infolivros.org/wp-content/uploads/2021/08/livros-basquetebol.webp?ezimgfmt=ngcb2/notWebP",
        //     "titulo": "Como pensar em quadra?",
        //     "endpoint":'rotinaDrible',
        //     "descricao": "-",
        //     "tipo": "estudo",
        // },
        // {
        //     "img": "/imgs/kirie.jpg",
        //     "titulo": "Rotina de drible",
        //     "endpoint":'livro',
        //     "descricao": "20 min",
        //     "tipo": "drible",
        // }
    ]
    const { tipoTreino } = useParams();
    return (

        <section class="treinos-class">
            <h1>/<strong className='op6'>/</strong><strong className='op3'>/</strong> {tipoTreino}</h1>
            <p>Lista de treinos para {tipoTreino}</p>

            <div className="treinos">
                {
                    teste.filter((treino) => tipoTreino === treino.tipo).length > 0 // Check if there are any trainings of the specified type
                        ? teste.filter((treino) => tipoTreino === treino.tipo) // If there are, map them
                            .map((treino, index) => (
                                <div className="treino" key={index}>
                                    <img src={treino.img}
                                        alt={treino.titulo} />
                                    <div className="info">
                                        <h2>{treino.titulo}</h2>
                                        <p>{treino.descricao}</p>
                                    </div>
                                    <a href={`/exercicios/${treino.endpoint}`}>▶</a>
                                </div>
                            ))
                        : <h3>Não há treinos aqui por enquanto</h3> // If there aren't, display the message
                }
            </div>
        </section>

    )
}
export default Treinos