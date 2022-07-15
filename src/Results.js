import Card from "./Card"

function Results ({characters, isLoading}) {
    return(
        <div className="results-grid">
        {isLoading ? <h1>Loading...</h1> : characters.map(
            (character) => <Card key={character.char_id} character={character} />
        )}
        </div>
    )
}

export default Results