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



export const startLoginUser = (formData) => {
    console.log(formData)
    return (dispatch) => {
        axios.post('/users/login', formData)
            .then(response => {
                if(response.data.errors){
                    alert(response.data.errors)
                } else {
                    console.log(response.data)
                }
            })
    }
}