import React, {Component} from 'react';
import { MenuItems } from "./Navbar/MenuItems";
import './Navbar/Navbar.css';

class Home extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render(){
        return(

            <div className="pageWrapper">
            <nav className="NavbarItems">
                <h1 className="navbar-logo">HR</h1> 

                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                
            </nav>

             

         </div>
        )
    }
}

export default Home
