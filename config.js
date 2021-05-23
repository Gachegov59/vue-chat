export default {
    api: {
        local: 'http://localhost:5000',
    },
    endpoints: {
        user: {
            registration: '/auth/registration',
            auth: '/auth/login',
            getUsers: '/auth/users',
        }
    }

}