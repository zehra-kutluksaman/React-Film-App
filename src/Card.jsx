import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({ title, image, id }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/film/${id}`); // Film id'sine göre detay sayfasına yönlendirme
    };

    return (
        <div className="card">
            <h2 className='card-title'>{title}</h2>
            <img src={image} alt={title} className='card-image' style={{ width: '100%', borderRadius: '8px' }} />
            <button className='card-button' onClick={handleClick}>İncele</button>
        </div>
    );
}

export default Card;
