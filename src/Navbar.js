const Navbar = () => {


    return ( 
        <nav className="navbar">
            <h1>Data Dashboard</h1>
            <div className="links">
                <a href="/">Home </a>
                <a href="/activity">Physical Activity</a>
                <a href="/sleep">Sleeping Patterns</a>
                <a href="/interaction">Social Interactions</a>
                <a href="/mobility">Mobility</a>
            </div>
        </nav>
    );
}
 
export default Navbar;