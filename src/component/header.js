function Header(prop) {
    const { handlemenu } = prop;
    return (
        <header>
            <nav>
                <a href="#home" onClick={(e) => handlemenu('home', e)} className="navlink">Home</a>
                <a href="#login" onClick={(e) => handlemenu('login', e)} className="navlink">Login</a>
                <a href="#register" onClick={(e) => handlemenu('register', e)} className="navlink">Register</a>
            </nav>
        </header>
    );
}



export default Header;