import axios from "../../connfig/axios"


export const startRegisterUser = (formData) => {
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
                }
            })
    }
}