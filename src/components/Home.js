import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Logo from './Logo';
import SideBar from './SideBar';
import '../styles/home.scss';
import ekoMir from '../image/ekoMir.png';
import divnolar from '../image/divnolar.jpg';
import hutor from '../image/hutor.png';
// eslint-disable-next-line
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
                <h2 className="main-container__title">Продукция наших мастеров</h2>
            </section>

            <section className="main-container">
                <div className="main-img">
                    <a href="https://ladaga.ru"><img className="border" src={ekoMir} alt="ekoMir" /></a>
                </div>
                <div className="main-block">
                    <div className="main-block__url">
                        <a href="/pages/EkoMir1.htm">Продукция ladaga.ru</a>
                    </div>
                    <div className="main-block__text">
                        <p>Тут необходимо добавить описание.</p>
                    </div>
                </div>
            </section>
            
            <section className="main-container">
                <div className="main-img">
                    <a href="https://ДомКипрея.рус"><img className="border" src={domKipreya} alt="domKipreya" /></a>
                </div>
                <div className="main-block">
                    <div className="main-block__url">
                        <a href="/pages/HouseKiprey1.pdf">Продукция из т.к.🌱</a>
                    </div>
                    <div className="main-block__text">
                        <p>Тут необходимо добавить описание.</p>
                    </div>
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
                <div className="main-img">
                    <a href="https://hutoryanin.ru"><img className="border" src={hutor} alt="hutor" /></a>
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
                <div className="main-news">
                    <h4>Новости ЛУБяного Рынка АгроКультур</h4>

                    <p>Бумажная мельница в Тайлово</p>
                    <p>Создание мастерской "Бумажная мельница в Тайлово" проходит в рамках проекта для ечорских школьников "Льняная грамота". Этот проект получил поддержку от Фонда резидентских грантов и будет реализован в течение 2021 года. Занимаются этим проектом лена и Юрий Гуренко, одни из соучредителей информационно-просветительского проекта Льняная губерния".</p>
                    <p>Цель проекта: открыть просветительскую мастерскую по созданию бумаги из льняных олокон для повышения интереса к традиционным ремеслам Псковской земли и развития кологической осознанности среди печорских школьников.</p>
                    <p>Зима придержала нас своими последними снегопадами и ночными морозами. Но проект ачинает потихоньку осуществляться. Уже прибыли материалы для косметического ремонта умажной мастерской. Наши добрые помощники-волонтеры из Москвы, Санкт-Петербурга, урманска и Печор оказали посильную поддержку в подготовке здания к ремонтным работам. ришлось разобрать старую печь, но труба остается и присоединится к новой печи. ачинаем с заливки пола, а там и всё остальное...</p>
                </div>
            </section>

            <hr />

            <section className="main-container">
                <div className="main-textil">                        
                    <h4>Ремесленные наРОДные пРОДукты из Технической Конопли</h4>

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
