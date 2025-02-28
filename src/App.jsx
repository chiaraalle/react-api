/*Partendo dall'esercizio precedente, integriamo le API che abbiamo sviluppato durante il modulo su ExpressJS.
 Al caricamento dell'applicazione, sfruttando l'hook useEffect, recuperiamo la lista dei post dal backend e la mostriamo nella tabella. */

import axios from "axios"
import React, { useEffect, useState } from "react" 

function App() {
  const endpoint = "http://localhost:3000/posts"
  const [posts, setPosts] = useState([])


  const fetchPosts = () => {
    axios.get(endpoint)  
      .then(response => {
        setPosts(response.data) //il valore viene salvato nella funzione setPosts
      })
      .catch(error => {
        console.log(error)
      })
  }

  //attivo la funzione fetchPosts al caricamento dell'applicazione
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <h1>Posts</h1>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
            </tr>
            </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.image}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        
      
    </>
  )
}

export default App
