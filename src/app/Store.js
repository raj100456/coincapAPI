import { configureStore } from "@reduxjs/toolkit";
import { cryptoCoinsReducer } from "../features/CryptoSlice/cryptoSlice";

const store = configureStore({
  reducer: {
    cryptoCoins: cryptoCoinsReducer,
  },
});

export { store };
