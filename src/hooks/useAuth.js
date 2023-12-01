import axios from "axios"

const useAuth = () => {
//! registro de usuario
    const registerUser = (users) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        axios.post( url, users )
        .then(res=> console.log(res.data))
        .catch(err=> console.log(err))
    }

//! login de usuario
    const loginUser = (credentials) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        axios.post( url, credentials )
        .then(res=>{ 
            console.log(res.data)
            //! agrega elemento al localstorage
            localStorage.setItem('token', res.data.token)
            //! acceder al valor guardado en localstorage
            //localStorage.getItem('token')
            //! borra o remueve lo guardado
            //localStorage.removeItem('token')
        })
        .catch(err=> console.log(err))
    }
    
    return { registerUser, loginUser }
}

export default useAuth