import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {

    return (  <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">

    <a className="navbar-brand" href="#">Qura'an App</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item active">
            <a className="nav-link" href="#">Home </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">All Categories</a>
        </li>
        </ul>
    </div>
</nav>
                </>)
                ;
}
export default NavBar;