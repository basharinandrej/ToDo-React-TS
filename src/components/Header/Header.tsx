import React from 'react'



const Header: React.FC = () => {


    return (
        <nav>
            <div className="nav-wrapper purple darken-2 mt-2">
                <a href="/" className="brand-logo">TypeScript + React</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">Information</a></li>

                    <li><a href="/">To-Do</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header