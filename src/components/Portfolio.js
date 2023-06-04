import AnimatedLetters from './AnimatedLetters'
import 'animate.css'
import htmlcss from '../images/htmlcss.png'
import mario from '../images/mario.png'
import todo from '../images/todo.png'

const Portfolio = () => {
    return(
        <div className="Portfolio-page">
            <AnimatedLetters strArray={'Portfolio'.split('')} />
            <div className='text-center font-bold text-3xl'>
            <h1 className='mt-20 mb-10'>My Recent Work</h1>
            </div>
            <div className="container">

             
                <div className="box animate__animated animate__fadeIn animate__delay-0.5s">
                    <div className="imgBx">
                        <img src={htmlcss} alt=""/>
                    </div>
                    <div className="content">
                        <p><a href="https://lana24242424.github.io/simple-html-css-project/">HTML and CSS project</a> </p>
                    </div>         
                </div>



                <div className="box animate__animated animate__fadeIn animate__delay-1s">
                    <div className="imgBx">
                        <img src={mario} alt=""/>                         
                    </div>
                    <div className="content"> 
                       <p><a href="https://codepen.io/lana24242424/pen/WNgoXab">Mario Game</a>  </p>                      
                    </div>         
                </div>



                <div className="box animate__animated animate__fadeIn animate__delay-2s">
                    <div className="imgBx">
                        <img src={todo} alt=""/>     
                    </div>
                    <div className="content">
                        <p><a href="https://codepen.io/lana24242424/pen/jOzGZPL">ToDo List</a></p>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Portfolio