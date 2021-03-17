import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Logo from './Logo';
import SideBar from './SideBar';
import '../styles/home.scss';
import ekoMir from '../image/ekoMir.png';
import divnolar from '../image/divnolar.jpg';
import hutor from '../image/hutor.png';
import whiteList from '../image/white_list.jpg';
import domKipreya from '../image/dom_kipreya.png';



const Home = () => {
    return (
    <div>
        <Header />
        <Logo />
        <SideBar />
        <main className="main">
            <section className="main-container">
                <h2>Продукция наших мастеров</h2>
            </section>

            <section className="main-container">
                <div className="main-img border">
                    <a href="https://ladaga.ru"><img src={ekoMir} alt="ekoMir" /></a>
                </div>
                <div className="main-block">
                    <a href="/EkoMir1.html">Прайс ЭкоМир Чаи</a>
                    <a href="/EkoMir2.html">Прайс ЭкоМир Масла</a>
                    <a href="/EkoMir3.html">Прайс ЭкоМир Мази</a>
                    <a href="/EkoMir4.html">Прайс ЭкоМир Травы</a>
                </div>
            </section>
            
            <section className="main-container">
                <div className="main-img border">
                    <a href="https://ДомКипрея.рус"><img src={domKipreya} alt="domKipreya" /></a>
                </div>
                <div className="main-block">
                    <a href="/HouseKiprey1.html">продукция из т.к.🌱</a>
                </div>
            </section>

            <section className="main-container">
                <div className="main-img">
                    <a href="https://www.livemaster.ru/divnolar"><img src={divnolar} alt="divnolar" /></a>
                </div>
                <div className="main-block">
                    <div className="main-block__url">
                        <a href="https://www.livemaster.ru/divnolar">Дивный ларь</a>
                    </div>
                    <div className="main-block__text">
                        <p>В нашем Дивном Ларе Вы найдете богатство природных даров Смоленской Земли и обереги, созданные на благо Лада и Мира в доме.</p>
                    </div>
                </div>
            </section>

            <section className="main-container">
                <div className="main-img border">
                    <a href="https://hutoryanin.ru"><img src={hutor} alt="hutor" /></a>
                </div>
                <div className="main-block">
                    <div className="main-block__url ">
                        <a href="https://hutoryanin.ru/products/">ХуторянинЪ</a>
                    </div>
                    <div className="main-block__text">
                        <p>Изделия ручной работы и плоды умственного труда ютуб-блогера "ХуторянинЪ".</p>
                        <p>Кованые ножи сделанные инженером-программистом.</p>
                        <p>Сайты и телеграм боты сделанные кузнецом.</p>
                    </div>
                </div>
            </section>

            <hr />

            <section className="main-container">
                <div className="main-textil">
                    <p>Ремесленные наРОДные пРОДукты из Технической Конопли</p>

                    <a href="images/textil1.jpg"><img src="images/textil1.jpg" alt="текстиль"/></a>
                    <a href="images/textil2.jpg"><img src="images/textil2.jpg" alt="текстиль"/></a>
                    <a href="images/textil3.jpg"><img src="images/textil3.jpg" alt="текстиль"/></a>
                    <a href="images/textil4.jpg"><img src="images/textil4.jpg" alt="текстиль"/></a>
                    <a href="images/textil5.jpg"><img src="images/textil5.jpg" alt="текстиль"/></a>
                    <a href="images/textil6.jpg"><img src="images/textil6.jpg" alt="текстиль"/></a>
                    <a href="images/textil7.jpg"><img src="images/textil7.jpg" alt="текстиль"/></a>
                    <a href="images/textil8.jpg"><img src="images/textil8.jpg" alt="текстиль"/></a>
                </div>
            </section>

            
        </main>

        <Footer />
    </div>
    );
}

export default Home;
