import React from "react";
import classes from "./navbar.module.scss";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return(
    <nav className={classes.nav}>
        <div className={`container ${classes.container}`}>
            <NavLink to="/" exact className={classes.logo}>Lightning Network</NavLink>
            <div>
                {!props.guard ?
                    <React.Fragment>
                        <NavLink to="/login" exact className={classes.navLink} activeClassName={classes.active}>Log In</NavLink>
                        <NavLink to="/register" exact className={classes.navLink} activeClassName={classes.active}>Register</NavLink>
                    </React.Fragment> :
                    <React.Fragment>
                        <NavLink to="/users" exact className={classes.navLink} activeClassName={classes.active}>Users</NavLink>
                        <NavLink to="/wallet" exact className={classes.navLink} activeClassName={classes.active}>Wallet</NavLink>
                    </React.Fragment>
                }
                <NavLink to="/markets" exact className={classes.navLink} activeClassName={classes.active}>Markets</NavLink>
                <NavLink to="/trade" exact className={classes.navLink} activeClassName={classes.active}>Trade</NavLink>
            </div>
        </div>
    </nav>
)}


export default Navbar