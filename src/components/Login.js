import {useState} from 'react'
import { registerNewUser, signInWithEmail } from '../firebase'
import AnimatedLetters from './AnimatedLetters'

const Login = () => {
    let [email, setEmail] = useState('veg124@yandex.ru')
    let [password, setPassword] = useState('123Leto!!!')
    const stringTitle = 'Login'


function updateEmail(event) {
    setEmail(event.target.value)
    console.log(email)
}

function updatePassword(event) {
    setPassword(event.target.value)
    console.log(email)

}

function logUserIn(event) {
    event.preventDefault()
    console.log(email, password)
    setEmail('')
    setPassword('')

    signInWithEmail(email, password)
}

function registerUser(event) {
    event.preventDefault()
    console.log(email, password)
    
    registerNewUser(email, password)
}



return(
        <div className="Login-page">
            <AnimatedLetters strArray={'Login'.split('')} />

            <div className='forms'>
                <form className='login my-5'>
                    <h3 className='mb-4'>Login form</h3>
                    <div className='w-full'>
                        <input className='mr-2 text-black' type='text' placeholder='Email' value={email} onChange={updateEmail}/>
                        <input className='mr-2 text-black' type='password' placeholder='Password' value={password} onChange={updatePassword}/>
                    </div>
                    <div className='w-full'>
                        <input className='mt-4 bg-gray-400 px-3' type='submit' value='Submit' onClick={logUserIn}/>
                    </div>
                </form>

                {/* <form className='register my-5'>
                    <h3 className='mb-4'>Register form</h3>
                    <div className='w-full'>
                        <input className='mr-2 text-black' type='text' placeholder='Email' value={email} onChange={updateEmail}/>
                        <input className='mr-2 text-black' type='password' placeholder='Password' value={password} onChange={updatePassword}/>
                    </div>
                    <div className='w-full'>
                        <input className='mt-4 bg-gray-400 px-3' type='submit' value='Submit' onClick={registerUser}/>
                    </div>
                </form> */}
            </div>
        </div>
)

}

export default Login