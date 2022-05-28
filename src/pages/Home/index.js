import { useEffect, useState } from 'react';
import api from '../../services/api';

//URL da API: /movie/now_playing?api_key=e221a4b937ed104a4fa26578f06420aa&language=pt-BR

function Home(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("/movie/now_playing", {
                params:{
                    api_key: "e221a4b937ed104a4fa26578f06420aa",
                    language: "pt-BR",
                    page: 1
                }
            })

            console.log(response.data.results);

        }

        loadFilmes();
    }, [])

    return(
        <div>
            <h1>Bem vindo a home</h1>
        </div>
    )
}

export default Home;