import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilmDetail from './FilmDetail'; // Film detay sayfası bileşeni

const API_KEY = '2fca53f7492586074e56152075a31ac9';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

function App() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await axios.get(API_URL);
                setFilms(response.data.results); // Film verilerini al
            } catch (error) {
                console.error('Error fetching the films', error);
            }
        };

        fetchFilms();
    }, []);

    return (
        <Router>
            <div className='App'>
                <div className='baslik'>
                    <h1>FİLM UYGULAMASI</h1>
                </div>
                <Routes>
                    <Route path="/" element={
                        <div className="card-container">
                            {films.map(film => (
                                <Card
                                    key={film.id}
                                    id={film.id} // Film id'sini prop olarak geçiriyoruz
                                    title={film.title}
                                    image={`https://image.tmdb.org/t/p/w500${film.poster_path}`} // Resim URL'si
                                />
                            ))}
                        </div>
                    } />
                    <Route path="/film/:id" element={<FilmDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
