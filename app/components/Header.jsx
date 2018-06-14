import React from 'react';
import {Link} from 'react-router';


export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="gradient">

                </div>

                <div className="instagram">
                    {/*<img src="img/Instagram.png" alt=""/>*/}
                    #hotdogs
                </div>

                <div className="photogrid">

                </div>

                <header className="header">
                    <nav>
                        <Link to='/'>
                            <a href="">menu</a>
                        </Link>
                        <a href="">catering</a>
                        <a href="">about us</a>
                        <Link to='/contact'>
                            <a href="">contact</a>
                        </Link>
                    </nav>
                </header>
            </div>
        )
    }
}