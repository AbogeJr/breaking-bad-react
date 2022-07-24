import './App.css';
import {useEffect, useState} from "react"
import Results from "./Results"
import Searchbar from './Searchbar';
import Header from "./Header"

function App() {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLOading] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const getCharacters = async() => {
      const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      if(response.status!==200){
        throw new Error(`${response.status} : ${response.statusText}`)
      }
      const data = await response.json()
      return data
    }
    getCharacters().then(data=>{
      setCharacters(data)
      setIsLOading(false)
    }).catch(err=>{
      console.log(err.message)
    })
  }, [query])

  return (
    <div>
      <Header />
      <Searchbar getQuery={q=>setQuery(q)} />
      <Results characters={characters} isLoading={isLoading} />
    </div>
  )
}

export default App;
