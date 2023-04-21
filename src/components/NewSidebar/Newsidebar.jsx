import React from 'react'
import "./newsidebar.css"
import { navStyle } from './style.js'

const Newsidebar = () => {
    const { classes } = navStyle();
    console.log(classes.fas)
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.ham}><i className="fas fa-bars"  > </i></li>
                <li><a href="#">
                    <i className="fas fa-home"  ></i>
                    <span className={classes.navItem}>Home</span>
                </a></li>
                <li><a href="#">
                    <i className="fas fa-comment"></i>
                    <span className={classes.navItem}>Chat</span>
                </a></li>
                <li><a href="#">
                    <i className="fas fa-users"></i>
                    <span className={classes.navItem}>Space</span>
                </a></li>
                <li><a href="#">
                    <i className="fas fa-user-alt"></i>
                    <span className={classes.navItem}>Profile</span>
                </a></li>
                <li><a href="#" className={classes.logout}>
                    <i className="fas fa-sign-out-alt"></i>
                    <span className={classes.navItem}>Log Out</span>
                </a></li>
            </ul>
        </nav>
    )
}

export default Newsidebar
