import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Logo from './Logo';
import SideBar from './SideBar';
import '../styles/home.scss';
import ekoMir from '../image/ekoMir.png';


const Home = () => {
    return (
    <div>
        <Header />
        <Logo />
        <SideBar />
        <main className="main">
            <article className="main-container">
                <div className="main-img">
                    <img src={ekoMir} alt="ekoMir" />
                </div>
                <div className="main-block">
                    <a href="/EkoMir1.html">Прайс ЭкоМир Чаи</a>
                    <a href="/EkoMir2.html">Прайс ЭкоМир Масла</a>
                    <a href="/EkoMir3.html">Прайс ЭкоМир Мази</a>
                    <a href="/EkoMir4.html">Прайс ЭкоМир Травы</a>
                </div>
            </article>
            <article className="main-container">
                <div className="main-inline-block">
                    <a href="https://ДомКипрея.рус">🏡Дом Кипрея🌿</a>
                    <a href="/HouseKiprey1.html">продукция из т.к.🌱</a>
                </div>
            </article>

            <hr />

            <article className="main-container">
                <div className="main-textil">
                    <p>Раздел Текстиль либо наша совместная либо лёгкая промышленность</p>

                    <a href="images/textil1.jpg"><img src="images/textil1.jpg" alt="текстиль"/></a>
                    <a href="images/textil2.jpg"><img src="images/textil2.jpg" alt="текстиль"/></a>
                    <a href="images/textil3.jpg"><img src="images/textil3.jpg" alt="текстиль"/></a>
                    <a href="images/textil4.jpg"><img src="images/textil4.jpg" alt="текстиль"/></a>
                    <a href="images/textil5.jpg"><img src="images/textil5.jpg" alt="текстиль"/></a>
                    <a href="images/textil6.jpg"><img src="images/textil6.jpg" alt="текстиль"/></a>
                    <a href="images/textil7.jpg"><img src="images/textil7.jpg" alt="текстиль"/></a>
                    <a href="images/textil8.jpg"><img src="images/textil8.jpg" alt="текстиль"/></a>
                </div>
            </article>

        </main>

        <Footer />
    </div>
    );
}

export default Home;
