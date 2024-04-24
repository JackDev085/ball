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
            "downloadLink":"https://d1wqtxts1xzle7.cloudfront.net/65604937/PDF_LIVRO_0K_17-libre.pdf?1612454600=&response-content-disposition=inline%3B+filename%3DBASQUETE_TREINAMENTO_DA_FORCA_FUNCIONAL.pdf&Expires=1713963742&Signature=BftBDDAklpn2Hr1wBMY1jU~pMEZjOmoDwE9IE-NaZwkpJaW8oO-yLXnCfOeVpWYQUMdyoXyr48vLw5vo65~u4R5tt~gUIJnuWNPauos7yXQfrJDvL34y8lFrKtAvtavpo0OgM~Z7kf0XcMkLVBlTHWdLVQgeSsPnspwwjgn6tUHFUXnxbjJCxR5Xa~wp65c0lXexVJAaTWrHAFa1bkgmt144n7fZGsAgO1FcNKXcN6XaC6w-X7rDtK3u-M8tVqouzuorHDjZpv6l3yvGbsqbvy6GVvDzcaBMFQsModpzJYBGkFcZE9zEj4G7qINyBuFA-6ykBv2xNJyhLr4LjH~bdg__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
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
                                            : <a href={`/exercicios/${treino.endpoint}`}>{'>'}</a>
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