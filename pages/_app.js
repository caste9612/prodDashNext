import Navbar from '../components/Navbar';
import { CuvetteContext, CuvettesProvider, LotsContext } from '../lib/context';
import { createContext, useContext, useEffect, useState } from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {

  const[lots, setLots] = useState([]);

  useEffect(() => {
    //console.log("ciao dalla App page");
    //setCuvettesData({ cuvettes: {  } });
  }, [(lots)]);

  return (
    <LotsContext.Provider value={{lots, setLots}}>
      <Navbar />
      <Component {...pageProps} />
    </LotsContext.Provider> 
  );
}

export default MyApp
