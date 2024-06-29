import React, { useState } from 'react';
import axios from 'axios';

function Quote() {
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");

    function getQuote() {
        axios.get(`${import.meta.env.VITE_BASE_URL}/api`, { crossdomain: true })
        // axios.get('http://localhost:5000/api', { crossdomain: true })
            .then(respone => {
                setText(respone.data.text);
                setAuthor(respone.data.author);
            })
    }

    return (
        <>
            <div>
                <h1>{text}</h1>
                <h3>{author}</h3>
                <button onClick={getQuote}>
                    Generate Quote
                </button>
            </div>
        </>
    )
}

export default Quote
