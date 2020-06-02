import React from "react"

class LoginUser extends React.Component{
    constructor(){
        super()
        this.state = {
            email : "",
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
            email : this.state.email,
            password : this.state.password
        }
        console.log(formData)
    }

    render(){

        return (
            <div>
                <h1>This is Login Page</h1>
                <form onSubmit = {this.handleSubmit} >
                    <label>Email</label>&nbsp;&nbsp;
                    <input type = "text" name = "email" value = {this.state.email} onChange = {this.handleInputChange} />
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

export default LoginUser