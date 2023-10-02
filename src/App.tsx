import React from "react";
import "./App.css";
import CryptoNews from "./components/CryptoNewsList.tsx";
import { CryptoNewsProvider } from "./context/CryptoNewsContext.tsx";

function App() {
  return (
    <div className="App">
      <CryptoNewsProvider>
        <CryptoNews />
      </CryptoNewsProvider>
    </div>
  );
}

export default App;
