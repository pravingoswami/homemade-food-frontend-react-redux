import React from 'react'
import { startRegisterUser } from '../../redux/actions/userActions'
import { connect } from 'react-redux'


class RegisterUser extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "",
            username : "",
            email : "",
            mobile : "",
            role : "",
            gender : "",
            avatar : "",
            password : ""
        }
    }


    handleInputChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleGender = (e) => {
        this.setState({
            gender : e.target.value
        })
    }

    handleRole = (e) => {
        this.setState({
            role : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name : this.state.name,
            username : this.state.username,
            email : this.state.email,
            mobile : this.state.mobile,
            role : this.state.role,
            gender : this.state.gender,
            avatar : this.state.avatar,
            password : this.state.password,
        }
        const redirect = () => this.props.history.push("/login")
        this.props.dispatch(startRegisterUser(formData, redirect))
        console.log(formData)

    }

    render(){
        return (
            <div>
                <h1>This is register Page</h1>
                <form onSubmit = {this.handleSubmit} >
                    <label>Name</label> &nbsp;&nbsp;
                    <input type = "text" value = {this.state.name} name = "name" onChange = {this.handleInputChange} />
                    <br></br>
                    <br></br>

                    <label>Username</label> &nbsp;&nbsp;
                    <input type = "text" value = {this.state.username} name = "username" onChange = {this.handleInputChange} />
                    <br></br>
                    <br></br>

                    <label>email</label> &nbsp;&nbsp;
                    <input type = "text" value = {this.state.email} name = "email" onChange = {this.handleInputChange} />
                    <br></br>
                    <br></br>

                    <label>mobile</label> &nbsp;&nbsp;
                    <input type = "text" value = {this.state.mobile} name = "mobile" onChange = {this.handleInputChange} />
                    <br></br>
                    <br></br>

                    <label>avatar</label> &nbsp;&nbsp;
                    <input type = "text" value = {this.state.avatar} name = "avatar" onChange = {this.handleInputChange} />
                    <br></br>
                    <br></br>

                    <label>Role</label>&nbsp;&nbsp;
                    <input type = "radio" name = "role" value = "Customer" onChange = {this.handleRole} /> <label>Customer</label>
                    <input type = "radio" name = "role" value = "Chef" onChange = {this.handleRole} /><label>Chef</label>
                    <br></br>
                    <br></br>

                    <label>Gender</label>&nbsp;&nbsp;
                    <input type = "radio" name = "gender" value = "Male" onChange = {this.handleGender} /> <label>Male</label>
                    <input type = "radio" name = "gender" value = "Female" onChange = {this.handleGender} /><label>Female</label>
                    <br></br>
                    <br></br>

                    <label>password</label> &nbsp;&nbsp;
                    <input type = "password" value = {this.state.password} name = "password" onChange = {this.handleInputChange} />
                    <br></br>
                    <br></br>
                    
                    <button type = "submit" >SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default connect()(RegisterUser)