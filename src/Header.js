// const logo = require("logo.png")
import logo from "./logo.png"


function Header () {
    return (
        <header>
            <img alt="" id="logo" src={logo} />
        </header>
    )
}

export default Header