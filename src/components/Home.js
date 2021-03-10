import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Logo from './Logo'
import '../styles/home.scss'

const Home = () => {
    return (
    <div className="container-home">
        <Header />
        <Logo />
            <main>
                <a href="/EkoMir1.html">Прайс 1</a>
                <a href="/EkoMir2.html">Прайс 2</a>
                <a href="/EkoMir3.html">Прайс 3</a>
                <a href="/EkoMir4.html">Прайс 4</a>
            </main>
        <Footer />
    </div>
    )
}

export default Home
