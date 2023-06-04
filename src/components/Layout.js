import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const Layout = () => {
    return(
        <div className="app-layout pl-14">

            <Navigation />

            <div className="page p-5"> 
                <Outlet />
            </div>

        </div>
    )
}

export default Layout