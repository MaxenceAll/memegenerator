import './Header.css'

function Header() {
    return ( 

        <header className="header">
            <img 
                src={require(`../images/Troll Face.png`)} 
                alt="trollface" 
                className="header--image"
            />
            <h2 className="header--title">
                MEME generator
            </h2>
            <h4 className="header--project">
                React Course - Project 3
            </h4>
        </header>


     );
}

export default Header;