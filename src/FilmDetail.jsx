import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './FilmDetail.css';

const API_KEY = '2fca53f7492586074e56152075a31ac9';

function FilmDetail() {
    const { id } = useParams(); // URL'den id parametresini alıyoruz
    const [film, setFilm] = useState(null);

    useEffect(() => {
        const fetchFilmDetail = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
                setFilm(response.data);
            } catch (error) {
                console.error('Error fetching the film details', error);
            }
        };

        fetchFilmDetail();
    }, [id]);

    if (!film) return <div>Loading...</div>;

    return (
        <div className='detail'>
            <h1 className='detail-h1'>{film.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} className='detail-image' />
            <p className='detail-p'>{film.overview}</p>
        </div>
    );
}

export default FilmDetail;
