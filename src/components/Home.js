import AnimatedLetters from './AnimatedLetters'

const Home = () => {
    return(
        <div className="home-page">
            <AnimatedLetters strArray={'Home'.split('')} />

                <div className="welcome-container text-center col px-3 pb-6 w-full">
                    <h1 className="welcome font-bold text-5xl mb-10 animate__animated animate__fadeIn animate__delay-1s">WELCOME</h1>
                    <p className="text-2xl animate__animated animate__fadeIn animate__delay-2s">I'm Svetlana Valeeva,  front-end-developer</p>
                </div>

        </div>

    )
}

export default Home