//! configuracion de token

const getConfigToken = () => ({

    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }

})

export default getConfigToken