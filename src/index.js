import React from "react";
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
// import * as firebase from 'firebase/app';
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// const firebaseConfig = {
//     apiKey: "AIzaSyBLdDhl_YCtWd1TEwfq_g21qrWriKyihRM",
//     authDomain: "spa-app-movies00.firebaseapp.com",
//     projectId: "spa-app-movies00",
//     storageBucket: "spa-app-movies00.appspot.com",
//     messagingSenderId: "254854655334",
//     appId: "1:254854655334:web:860240fc4ecf11df3b6ca7",
// };
root.render(<App />);

// ReactDOM.render(
//     <Provider store={store}> {/* Wrap your App component with Provider */}
//       <App />
//     </Provider>,
//     container
//   );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://create-react-app.dev/docs/measuring-performance/
reportWebVitals();

