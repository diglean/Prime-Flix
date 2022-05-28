import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3/
//URL da API /movie/now_playing?api_key=e221a4b937ed104a4fa26578f06420aa&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
