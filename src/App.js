import React, { useState } from "react";
import "./App.css";



function App() {
  const [val, setVal] = useState('');
  const [word, setWord] = useState(0);

  const handleChange = (e) => {
    const data = e.target.value.trim().split(/\s+/); // Use regex to split words
    setVal(e.target.value);
    setWord(data.length);
    if (e.target.value === '') {
      setWord(0);
    }
  };

  return (
    <div className="container">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Enter Text"
        cols={40}
        rows={10}
        value={val}
        onChange={handleChange}
      />
      <br />
      <p>Word Count: {word}</p>
    </div>
  );
}

export default App;
