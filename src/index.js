import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

const rootEl = document.getElementById('root');

// function render() {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     rootEl
//   );
// }
function render() {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
    rootEl
  );
}

if (module.hot) {
  module.hot.accept('./app/layout/App.js', function () {
    setTimeout(render);
  });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );