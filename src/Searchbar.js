import { useState } from "react"

const Searchbar = ({getQuery}) => {
const [text, setText] = useState("")
const onChange=(q) => {
    setText(q)
    getQuery(q)
}    

return (
    <section>
        <form
        onSubmit={(e)=>e.preventDefault()}
        >
        <input 
        className="search"
        placeholder="Search for a character"
        value={text}
        onChange={e=>onChange(e.target.value)}
        />
      </form>
    </section>
    )
}
export default Searchbar