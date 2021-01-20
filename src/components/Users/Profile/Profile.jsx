import React from "react";
import classes from "./profile.module.scss";
import {withRouter} from "react-router-dom";

const Profile = props => {
    const user = props.state.users[props.match.params.id]
    return(
    <div className={classes.container}>
        <div className={classes.profile}>
            <div className={classes.pic}/>
            <div className={classes.data}>
                <div className={classes.name}>{user.firstName} {user.lastName}</div>
                <div className={classes.email}>{user.email}</div>
                <div className={classes.pass}>{user.pass}</div>
            </div>
        </div>


    </div>
)}

export default withRouter(Profile)