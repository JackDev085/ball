import './module.Treinos.css'

import React from 'react';
import { useParams } from 'react-router-dom';



function Treinos() {
    const teste = [
        {
            "img": "/imgs/giannis.webp",
            "titulo": "Rotina de condicionamento",
            "endpoint": 'rotina_de_condicionamento',
            "descricao": "20 min",
            "tipo": "condicionamento",
        },
        {
            "img": "/imgs/curry-arremesso.webp",
            "titulo": "Média distância - 1",
            "endpoint": 'media_distancia',
            "descricao": "30 min",
            "tipo": "arremesso",
        },
        {
            "img": "https://www.infolivros.org/wp-content/uploads/2021/08/livros-basquetebol.webp?ezimgfmt=ngcb2/notWebP",
            "titulo": "Ebook/Artigo: Basquete: Treinamento da Força Funcional",
            "endpoint": 'estudo_artigo1',
            "descricao": "Artigo voltado a informação sobre treinamento de força para basquete",
            "tipo": "estudo",
            "downloadLink":"/archives/BASQUETE_TREINAMENTO_DA_FORCA_FUNCIONAL.pdf",
        },
        {
            "img": "https://www.infolivros.org/wp-content/uploads/2021/08/livros-basquetebol.webp?ezimgfmt=ngcb2/notWebP",
            "titulo": "Treino de força: Perspectiva de preparadores físicos em equipes de alto rendimento",
            "endpoint": 'estudo_artigo1',
            "descricao": "Visão de preparadores físicos do alto rendimento, quanto ao treinamento de força. ",
            "tipo": "estudo",
            "downloadLink":"/archives/Treino_da_Força_no_Basquetebol_A_Perspetiva_de_Preparadores_Físicos_de_Equipas_de_Alto_Rendimento.pdf",
        },
        {
            "img": "/imgs/kirie.jpg",
            "titulo": "Treino de drible - 1",
            "endpoint": 'treino_de_drible',
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
                                    {
                                        treino.tipo === "estudo"
                                            ? <a href={treino.downloadLink} target='_blank' download rel="noreferrer">📋</a>
                                            : <a href={`/exercicios/${treino.endpoint}`}>▶</a>
                                    }
                                </div>
                            ))
                        : <h3>Não há treinos aqui por enquanto</h3> // If there aren't, display the message
                }
            </div>
        </section>

    )
}
export default Treinos