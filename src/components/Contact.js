import AnimatedLetters from './AnimatedLetters'

const Contact = () => {
    return(
        <div className="Contact-page">
            <AnimatedLetters strArray={'Contact'.split('')} />

          <form className="form flex flex-col mt-5">

          <div>
            <div className="flex flex-col mb-5">
              <label className="mb-2" for="name">Your name</label>
              <input className="w-96 mb-2 text-black" type="text" name="" placeholder="Enter your name"/>
            </div>

            <div className="flex flex-col mb-5">
              <label className="mb-2" for="email1">Your email</label>
              <input className="w-96 mb-2 text-black" type="email" name="" placeholder="Enter Your email"/>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2" for="message">Your Message</label>
            <textarea className="w-96 mb-2 text-black" cols="30" rows="5" placeholder="Enter your message"></textarea>
          </div>
          <div>
          <button type="submit" className="flex flex-grow-0 mt-4 bg-gray-400 px-3 w-20 p-1 px-1.5 rounded-md hover:bg-sky-700">Submit</button>
          </div>
        </form>

        </div>

    )
}

export default Contact