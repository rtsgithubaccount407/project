import React from 'react'
import './Style.css'
import Header from './Components/Header'
import Typingbox from './Components/TypingBox'
import Footer from './Components/Footer'

const App = () => {

    return (
        <div className="App">
            <Header />
            <Typingbox />
            <Footer/>
        </div>
    )
}
export default App;