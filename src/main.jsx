import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";
// Redux
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
// 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>  
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
