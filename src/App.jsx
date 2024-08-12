import React, { useState, useEffect } from "react";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div
        id="quote-box"
        style={quote === "" ? { display: "none" } : { display: "block" }}
      >
        <p id="text">
          <svg
            fill="#fff"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>quote</title>{" "}
              <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>{" "}
            </g>
          </svg>
          {quote}
        </p>
        <p id="author">- {author}</p>
        <button id="new-quote" onClick={fetchQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
      <p id="creator">by RedHatPixel</p>
    </>
  );
};

export default App;
