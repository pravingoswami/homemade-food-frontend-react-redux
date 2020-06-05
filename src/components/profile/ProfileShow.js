import React from 'react'
import { connect } from 'react-redux'

function ProfileShow(props){
    return (
        <div> {console.log(props.user)}
            <h1>This is User Profile Show Page</h1>
            {
                props.user && (
                    <div>
                        <label><b>Name</b> - {props.user.name}</label>
                        <br></br> 
                        <label><b>Username</b> - {props.user.username}</label>
                        <br></br>
                        <label><b>Mobile</b> - {props.user.mobile}</label>
                        <br></br>
                        <label><b>Email</b> - {props.user.email}</label>
                        <br></br>
                        <label><b>Gender</b> - {props.user.gender}</label>
                        <br></br>
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(ProfileShow)