/*Partendo dall'esercizio precedente, integriamo le API che abbiamo sviluppato durante il modulo su ExpressJS.
 Al caricamento dell'applicazione, sfruttando l'hook useEffect, recuperiamo la lista dei post dal backend e la mostriamo nella tabella. */

import axios from "axios"
import React, { useEffect, useState } from "react" 

function App() {
  const endpoint = "http://localhost:3000/posts"


  const fetchPosts = ( endpoint ) => {
    axios.get()  
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      
    </>
  )
}

export default App
