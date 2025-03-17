import React from "react";
import quotesData from "../data/quotes.json";

const Quotes = () => {
  const quotesIndex = Math.floor(Math.random() * quotesData.length);
  const randomQuote = quotesData[quotesIndex];

  return (
    <div className="flex justify-center items-center mt-10">
      <div>
        <p className="text-md italic">"{randomQuote.quote}"</p>
        <p className="text-right text-sm">-{randomQuote.author}</p>
      </div>
    </div>
  );
};

export default Quotes;
