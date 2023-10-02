import React, { createContext, useReducer, useContext, useEffect } from "react";
import { staticData } from "../data/crypto-news";

// Initial state
const initialState = {
  cryptoNews: [],
};

// Action types
const SET_CRYPTO_NEWS = "SET_CRYPTO_NEWS";

// Reducer function
const cryptoNewsReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_CRYPTO_NEWS:
      return { ...state, cryptoNews: action.payload };
    default:
      return state;
  }
};

// Create the context
const CryptoNewsContext = createContext({
  cryptoNews: initialState.cryptoNews,
  dispatch: () => {}, // Placeholder dispatch function
});

// Custom hook to access the context
export const useCryptoNews = () => {
  const context = useContext(CryptoNewsContext);
  if (!context) {
    throw new Error("useCryptoNews must be used within a CryptoNewsProvider");
  }
  return context;
};

// Create a provider component
export const CryptoNewsProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(cryptoNewsReducer, initialState);

  // Set static data when the component mounts
  useEffect(() => {
    dispatch({ type: SET_CRYPTO_NEWS, payload: staticData });
  }, [dispatch]);

  return <CryptoNewsContext.Provider value={state}>{children}</CryptoNewsContext.Provider>;
};
