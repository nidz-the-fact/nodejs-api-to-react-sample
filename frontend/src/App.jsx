import React, { useState } from 'react';
import './App.css'
import axios from 'axios';
{/* <Quote  /> */ }
import Quote from './Hook/Quote';

function App() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function getQuote() {
    axios.get('http://localhost:5000/api')
      .then(respone => {
        setText(respone.data.text);
        setAuthor(respone.data.author);
      })
  }

  return (
    <>
      <div className="">

        <h1>{text}</h1>
        <h3>{author}</h3>
        <br />
        <button className='' onClick={getQuote}>
          Generate Quote
        </button>

        {/* or Hook with Components - import Quote from './Hook/Quote'; */}
        {/* <Quote  /> */}

      </div>
    </>
  )
}

export default App
