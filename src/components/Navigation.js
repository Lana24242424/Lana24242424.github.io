import { Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faAddressCard, faBookSkull, faEnvelopeOpenText, faHouse, faArrowRightToBracket,  faCat} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faInstagram, faGithub  } from '@fortawesome/free-brands-svg-icons'



const Navigation = () => {
    return(
        <div className="nav-bar w-14 h-[100vh] bg-zinc-900 fixed top-0 left-0 p-4 flex flex-col justify-center z-10">

                <Link className="logo mb-auto" to="/">
                    <FontAwesomeIcon icon={faCat} className="my-4 text-3xl text-white hover:text-yellow-400"/>
                 </Link>
            <nav className="mb-auto">
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHouse} className="my-4 text-2xl text-white hover:text-yellow-400"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" to="/about">
                    <FontAwesomeIcon icon={faAddressCard} className="my-4 text-2xl text-white hover:text-yellow-400"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" to="/portfolio">
                    <FontAwesomeIcon icon={faBookSkull} className="my-4 text-2xl text-white hover:text-yellow-400"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" to="/portfoliotwo">
                    <FontAwesomeIcon icon={faBookSkull} className="my-4 text-2xl text-white hover:text-yellow-400"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" to="/contact">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="my-4 text-2xl text-white hover:text-yellow-400"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" to="/contactform">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="my-4 text-2xl text-white hover:text-yellow-400"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" to="/dashboard">
                    <FontAwesomeIcon icon={faArrowRightToBracket} className="my-4 text-2xl text-white hover:text-yellow-400"/>
                </NavLink>
            </nav>
            <ul>
            <li>
                    <a href="https://github.com/Lana24242424">
                    <FontAwesomeIcon icon={faGithub} className="my-4 text-white hover:text-yellow-400 my-4 w-4 mx-auto"/> 
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/svetlana-valeeva/">
                    <FontAwesomeIcon icon={faLinkedin} className="my-4 text-white hover:text-yellow-400 my-4 w-4 mx-auto"/> 
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation