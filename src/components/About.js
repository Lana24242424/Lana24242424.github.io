import AnimatedLetters from './AnimatedLetters'
import profilePic from '../images/profilepic.jpeg'

const About = () => {
    return(
    <div className="about-page">
            <AnimatedLetters strArray={'About'.split('')} />
        <div className="about-container animate__animated animate__fadeIn animate__delay-0.8s">
            <div>
                    <img className="profile-pic w-80 h-80" src={profilePic} alt=""/>
            </div>
            <div>
                <p className='text-2xl mb-5 font-medium w-3/4'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <h2 className='mb-3'>Languages I speak:</h2>
            <ul className='flex gap-10'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
            </div>
        </div>
    </div>

    )
}

export default About