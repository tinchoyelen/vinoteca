import React from 'react';
import ReactDOM from 'react-dom/client';
/*import App from './App';*/
/*import reportWebVitals from './reportWebVitals';*/
/*import NavBar from './components/NavBar/NavBar';*/
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Landing from './components/Landing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
  {/* <NavBar /> */}
 
 <BrowserRouter>

  <Landing/>
  
</BrowserRouter>

  {/* <Button/>  */}
  {/* <CartWidget/>  */}
  </>

 /* <React.StrictMode> 
     <NavBar />
  </React.StrictMode> */
);


