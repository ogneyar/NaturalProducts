import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Logo from './Logo'
import SideBar from './SideBar'
import '../styles/home.scss'
import ekoMir from '../image/ekoMir.png'


const Home = () => {
    return (
    <div className="container-home">
        <Header />
        <Logo />
        <SideBar />
        <main className="main">
            <div className="main-img">
                <img src={ekoMir} alt="ekoMir" />
            </div>
            <div className="main-block">
                <a href="/EkoMir1.html">Прайс ЭкоМир Чаи</a>
                <a href="/EkoMir2.html">Прайс ЭкоМир Масла</a>
                <a href="/EkoMir3.html">Прайс ЭкоМир Мази</a>
                <a href="/EkoMir4.html">Прайс ЭкоМир Травы</a>
            </div>
        </main>
        <Footer />
    </div>
    )
}

export default Home
