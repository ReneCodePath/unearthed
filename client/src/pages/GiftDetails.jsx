

import React, {useState, useEffect} from 'react';
import './GiftDetails.css'
import { useParams } from 'react-router-dom';

const GiftDetails = ({data}) => {

    const [gift, setGift] = useState({id: 0, name: "", pricepoint: "", audience: "", image: "", description: "", submittedby: "", submittedon: ""})
    const [error, setError] = useState()
    const [loading, setLoading] = useState()

    const {id} = useParams()

    useEffect(() => {
        const fetchGiftById = async() => {
            try {
                const response = await fetch(`http://localhost:3001/gifts/${id}`);

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const result = await response.json();
                console.log(result);
                setGift(result);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            } 
        };
    
        fetchGiftById()

    }, [data, id]);


    return (
        <div className="GiftDetails">
            <main id="gift-content" class="gift-info">
                <div class="image-container">
                    <img id="image" src={gift.image} />
                </div>
                <div class="gift-details">
                    <h2 id="name">{gift.name}</h2>
                    <p id="submittedBy">{'Submitted By: ' + gift.submittedby}</p>
                    <p id="pricePoint">{'Price: ' + gift.pricepoint}</p>
                    <p id="audience">{'Great For: ' + gift.audience}</p>
                    <p id="description">{gift.description}</p>
                </div>
            </main>
        </div>
    )
}

export default GiftDetails