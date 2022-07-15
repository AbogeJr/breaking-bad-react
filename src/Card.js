function Card ({character}) {

    const {name, portrayed, img, nickname, occupation} = character

    // console.log(character['name'])
    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front" style={{backgroundImage: `url(${img})`}}></div>
                <div className="flip-card-back">
                    <img src="https://149360821.v2.pressablecdn.com/wp-content/uploads/2019/09/Breaking-Bad-Logo.jpg" className="card-logo" alt=""/>
                    <h2>{name}</h2>
                    <h4>a.k.a {nickname}</h4>
                    <p>{portrayed}</p>
                    {occupation.map((occ)=><span>{occ} | </span>)}
                </div>
            </div>
        </div>
    )
}

export default Card

