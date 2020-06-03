import axios from "../../connfig/axios"


export const startRegisterUser = (formData, redirect) => {
    return (dispatch) => {
        axios.post('/users/register', formData)
            .then(response => {
                console.log(response, formData)
                if(response.data.errmsg){
                    alert(response.data.errmsg)
                } else if(response.data.message){
                    alert(response.data.message)
                } else {
                    alert("Successfully Register")
                    redirect()
                }
            })
    }
}

export const setUser = (user) => {
    return {
        type : "SET_USER",
        payload : user
    }
}

export const startLoginUser = (formData, redirect) => {
    console.log(formData)
    return (dispatch) => {
        axios.post('/users/login', formData)
            .then(response => {
                if(response.data.errors){
                    alert(response.data.errors)
                } else {
                    alert("Successfully Login")
                    dispatch(setUser(response.data))
                    localStorage.setItem("x-auth", response.data.token)
                    redirect()
                }
            })
    }
}

export const removeUser = () => {
    return {
        type : "REMOVE_USER"
    }
}

export const startLogoutUser = () => {
    return (dispatch) => {
        axios.delete('/users/logout', {
            headers : {'x-auth' : localStorage.getItem('x-auth')}
        })
            .then(response => {
                console.log(response.data)
                if(response.data.message) {
                    alert(response.data.message)
                } else{
                    localStorage.removeItem('x-auth')
                }
            })
    }
}