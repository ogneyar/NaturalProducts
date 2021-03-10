import React from 'react'
// import logo from '../image/ring.png'
import logo1 from '../image/ring1.png'
import logo2 from '../image/ring2.jpg'
import '../styles/HomeLogo.scss'

const HomeLogo = () => {
    return (
        <div className="container-Home-logo">
            <header></header>
            <div className="Home-logo">
                {/* <img className="logo" src={logo} alt=""/> */}
                <img className="logo" src={logo1} alt=""/>
                <img className="logo-fon" src={logo2} alt=""/>
                <h1>приРОДные ПРОДУКТЫ</h1>
            </div>
            <footer>
                <h3>ПриродныеПродукты.рус</h3>
              
                <p>2021</p>
            </footer>
        </div>
    )
}

export default HomeLogo
