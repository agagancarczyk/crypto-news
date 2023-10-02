import React from "react";
import { useCryptoNews } from "../context/CryptoNewsContext";

const SomeComponent = () => {
  const { cryptoNews } = useCryptoNews();

  return (
    <div>
      <h2>Crypto News</h2>
      <ul>
        {cryptoNews.map((newsItem: any) => (
          <li key={newsItem.id}>
            <h3>{newsItem.title}</h3>
            <p>{newsItem.description}</p>
            <p>Source: {newsItem.source}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SomeComponent;
