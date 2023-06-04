import {signOutUser, dbRef, storage} from '../firebase'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {addDoc} from 'firebase/firestore'
import {useRef} from 'react'


const Account = () => {

    const form = useRef([])
     
    const submitPortfolio = (event) => {
            event.preventDefault()
            console.log('submitting')

            console.log(form.current)

            const image = form.current[0].files[0]
            console.log(image)

            //upload the image
            const storageRef = ref(storage, `portfolio/${image.name}`)

            uploadBytes(storageRef, image)
            .then((snapshot) => {
                console.log(snapshot.ref)
                getDownloadURL(snapshot.ref)
                .then ((downloadURL) => {
                    console.log(downloadURL)
                    savePortfolioToDatabase(downloadURL)
                })
                .catch((error) => {
                    console.log(error)
                })
            })
            .catch((error) => { 
                     console.log(error)
                    })

            // .then((downloadURL) => {
            //    console.log(downloadURL)
            //    .catch((error) => { 
            //     console.log(error)
            //    })
            // })
           

            // const itemImage = form.current[0].value
            // const itemName = form.current[1].value
            // const itemDescription = form.current[2].value
            // const itemLink = form.current[3].value

            

           // savePortfolioToDatabase(form)
    }

    const savePortfolioToDatabase = (imageURL) => {
        const portfolioItem = {
            imageURL: imageURL,
            itemName: form.current[1].value,
            itemDescription: form.current[2].value,
            itemLink: form.current[3].value,
        }

        addDoc(dbRef, portfolioItem)
        .then((documentRef) => {
            console.log('Document has been created', documentRef)
        })
        .catch((error) => {
            console.log(error)
        }) 
    }

    return(


    <>
    <h1>Account</h1>
    <button className="mt-4 bg-gray-400 px-3" onClick={signOutUser}>Logout</button>


    <form className="my-5 flex flex-col" ref={form} onSubmit={submitPortfolio}>
        <input type ="file" placeholder="Image" className="mb-4"/>
        <input type="text" placeholder="Progect Name" className="mb-4 text-black w-96"/>
        <input type="text" placeholder="Description" className="mb-4 text-black w-96"/>
        <input type="text" placeholder="Link URL" className="mb-4 text-black w-96"/>

        <button type="submit" className="mt-4 bg-gray-400 px-3 w-20">Submit</button>

    </form>
    </>

    )
    }
    
    export default Account