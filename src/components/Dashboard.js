import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Login from './Login'
import Account from './Account'

const Dashboard = () => {

    const [user, setUser] = useState(null)
    const auth = getAuth()

useEffect( () => {
    onAuthStateChanged(auth, (user) => {
        if(user) {
            setUser(user)
        } else {
            setUser(null)
        }
    })
} )

    return(
        <>
            <h1>Dashboard</h1>
        
            {user ? <Account /> : <Login />}     
        </>

    )
}

export default Dashboard