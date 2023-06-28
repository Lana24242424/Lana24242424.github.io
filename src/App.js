import { Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import ContactForm from './components/Contactform'
import Dashboard from './components/Dashboard'
import Portfoliotwo from './components/Portfoliotwo'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>

        <Route path="/" index element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/portfolio" element={ <Portfolio /> }/>
        <Route path="/contact" element={ <Contact /> }/>
        <Route path="/contactform" element={ <ContactForm /> }/>
        <Route path="/dashboard" element={ <Dashboard /> }/>
        <Route path="/portfoliotwo" element={ <Portfoliotwo /> }/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;


