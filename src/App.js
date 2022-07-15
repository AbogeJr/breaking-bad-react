// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import Results from "./Results"
import Searchbar from './Searchbar';
import Header from "./Header"
const axios = require('axios')

function App() {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLOading] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const getCharacters = async() => {
      axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      .then(response => {
        const data = response.data
        // console.log(data)
        setCharacters(data)
        setIsLOading(false)
      })
    }
    getCharacters()
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
