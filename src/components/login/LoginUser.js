import React from "react"
import { connect } from "react-redux"
import { startLoginUser } from "../../redux/actions/userActions"

class LoginUser extends React.Component{
    constructor(){
        super()
        this.state = {
            username : "",
            password : ""
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username : this.state.username,
            password : this.state.password
        }
        this.props.dispatch(startLoginUser(formData))
        console.log(formData)
    }

    render(){

        return (
            <div>
                <h1>This is Login Page</h1>
                <form onSubmit = {this.handleSubmit} >
                    <label>username</label>&nbsp;&nbsp;
                    <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleInputChange} />
                    <br></br>
                    <br></br>
                    <label>Pasword</label>&nbsp;&nbsp;
                    <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleInputChange} />
                    <br></br>
                    <br></br>
                    <button type = "submit" >SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default connect()(LoginUser)