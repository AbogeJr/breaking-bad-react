import Card from "./Card"
import Spinner from  "./Spinner"

function Results ({characters, isLoading}) {
    return(
        <div className="results-grid">
        {isLoading ? <Spinner /> : characters.map(
            (character) => <Card key={character.char_id} character={character} />
        )}
        </div>
    )
}

export default Results