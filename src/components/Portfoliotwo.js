import { useEffect, useState } from 'react'
import { dbRef } from '../firebase'
import { getDocs } from 'firebase/firestore'
import AnimatedLetters from './AnimatedLetters'


const Portfoliotwo = () => {

    const [portfolioData, setPortfolioData] = useState([])

    const stringTitle = 'Portfolio'

    useEffect(() => {
        getPortfolioData()
    }, [])
    

    const getPortfolioData = async () => {
        const querySnapshot = await getDocs(dbRef)
        console.log(querySnapshot)
        setPortfolioData(querySnapshot.docs.map((doc) => doc.data() ))
    }

    const renderPortfolio = (portfolio) => {
        return(
            <>
                {
                    portfolio.map((port, idx) => {
                        return(
                            <div key={idx} className="card w-full md:w-1/3 bg-gray-600 px-5 mb-5 m-6 animate__animated animate__fadeIn animate__delay-0.5s rounded-md">
                                <img className="bg-gray-600 p-5"/>
                                <img src={port.imageURL} alt={port.itemName} className="w-full h-80 object-cover"/>
                                <h3 className='text-white text-2xl font-bold my-2'>Title</h3>
                                <p className="text-white">{port.itemDescription}</p>
                                <button onClick={() => window.open(port.itemLink)} className='bg-gray-800 hover:bg-gray-900 px-4 mt-4 rounded-md mb-5'>View More</button>
                            </div>
                        )
                    })
                }
            </>
        )
    }


    return(
        <div className="Portfolio-page-two">
           <AnimatedLetters strArray={'Portfolio'.split('')} />
            
        <div className="portfolio-loop my-5 flex flex-wrap -mx-5">
           
           {renderPortfolio(portfolioData)}


        </div>
        </div>
    )
}

export default Portfoliotwo