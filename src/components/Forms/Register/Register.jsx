import React from 'react';
import classes from './register.module.scss'
import Input from "../UI/Input/Input";
import {validation} from "../../../functions/validation";

function Register(props){
    const emailValue = localStorage.getItem('email')
    const emailField = props.state.form.register.findIndex( field => field.type === 'email')
    if (emailValue && emailField){
        props.state.form.register[emailField].value = emailValue
        props.state.form.register[emailField].changed = true
        localStorage.removeItem('email')
    }

    const submitHandler = event => {
        event.preventDefault()
        const isValid = props.state.form.register.every( field => field.valid)
        if (!isValid){
            return false
        }
        const newUser = []
        props.state.form.register.forEach(
            item => newUser.push(item.value)
        )
        props.state.register(newUser)
        alert('Registered')
        props.state.clear_fields('register')
    }

    const changeHandler = (index, value) => {
        const item = props.state.form.register[index]
        item.value = value
        item.changed = !!value;
        item.valid = validation(item.value, item.validation)
        props.state.set_register({
            index,
            data: item
        })
    }
    return(
        <div className={`form ${classes.form}`}>
            <div className="header">
                <div>Register</div>
            </div>
            <form onSubmit={submitHandler}>
                {props.state.form.register.map( (item, index) => {
                    return(
                    <Input
                        key={index}
                        label={item.label}
                        type={item.type}
                        value={item.value}
                        message={item.message}
                        valid={item.valid}
                        changed={item.changed}
                        onChange={
                            event => changeHandler(index, event.target.value)
                        }
                    />
                    )})
                }
                <button className="btn red" type="submit">Register</button>
            </form>
        </div>
    )
}


export default Register
