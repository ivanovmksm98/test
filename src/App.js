import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { AiOutlineMenu } from 'react-icons/ai';
import './App.css';
import './adaptive.css';
import {ReactComponent as plussvg} from './plus.svg';


function App() {
  return (
    <>
    <header className={"header"}>
      <div className='wrapper'>
        
        <div className="logo-container">
            <img src={require("../src/Лого.png")} className={""} alt="logo" />
        </div>
        <div className='menu-adaptive'>
          <AiOutlineMenu style={{ height: 40, width: 40 }}/>
        </div>
        <nav className={"nav-container"}>
          <a>Услуги</a>
          <a>Кейсы</a>
          <a>О нас</a>
          <a>Контакты</a>
          <a>Битрикс 24</a>
        </nav>    
      </div>
    </header>
      <div className={'header-banner'}>
        <div className='wrapper'>
          <div className='banner-content'>
          <p className='banner-content-title'>
            Разработка веб-сайтов под ключ в Якутске
          </p>
          <p className='banner-content-text'>Мы — агентство полного цикла. Наши услуги включают маркетинговую стратегию, 
          брендинг, производство рекламных материалов, разработку сайта, поддержку и 
          эффективное привлечение клиентов</p> 
          </div>
        </div>
      </div>

  <div className={'request'}>
    <div className='wrapper'>
      <div className='request-content'> 
        <div className='button-layout'>
          <button className='request-button'>Отправить заявку</button>
        </div>
        <div className='request-text'>
          <p className='request-content-text'>Наши специалисты рассмотрят заявку и ответят удобным для вас способом</p>
          <div className='request-block-number'>
            <p>Или обращайтесь по номеру </p>
            <p className='request-content-number'>+7 (4112) 318 813</p>
          </div>
        </div>
      </div>        
    </div>
    <div className='wrapper'>
      <div className='request-approach'>
        <div className='request-content-approach'>
          <p className='content-title'>Подход</p>
          <p>Мы используем комплексный подход. Умеем вникать в бизнес-процессы, исследовать рынок, приоритизировать 
                гипотезы, проводить тестирования, делать правильные выводы и проектировать лучшие решения. </p>
        </div>
          <div className='request-content-clients'>
            <p className='content-title'>Клиенты</p>
            <p>Мы работаем с крупнейшими российскими компаниями — создаем для них новые продукты и улучшаем уже
                существующие. Наша цель — открывать для бизнеса новые digital решения, улучшая опыт взаимодействия пользователя с продуктом.</p>
          </div>
        </div>
      </div>
  </div>
  <div className={'services'}>
    <div className='wrapper'>
      <div className='services-content'>
        <div className='services-title'>      
          <p className='content-title'>Услуги</p>
        </div>
        <div className='menu'>
          <p className='menu-element'>01. Разработка сайта</p>
          <hr></hr>
          <p className='menu-element'>02. Разработка моб. приложений</p>
          <hr></hr>
          <p className='menu-element'>03. Интернет реклама</p>
          <hr></hr>
          <p className='menu-element'>04. Внедрение CRM Битрикс 24  </p>
          
        </div>    
      </div>
      <div className='services-description'>
        <p className='content-title'>01</p>
        <p>Создание сайтов - наша работа. Если Вы искали где можно заказать 
          недорогой и профессионально сделанный сайт, вы попали по адресу! Мы разрабатываем высококачественные сайты по доступным ценам!</p>
        <button className='services-button'>Перейти к услугам</button>
      </div>
    </div>
  </div>

  <div className={'priority-sectors'}>
    <div className='wrapper'>      
      <div className='priority-content'>
        <div className='priority-content-text'>
          <p className='content-title'>Приоритетные отрасли</p>
          <p>Мы применяем наши решения в отреслях, где опыт взаимодействия с пользователем создает новое качество повседневной жизни</p>
        </div>

        <div className='priority-content-links'>
          <div className='priority-content-column'>
            <button className='priority-button'>
              <div className='priority-svg'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1277 16C19.617 16 20 15.617 20 15.1277V4.89362V4.87234V4.85106V4.82979V4.80851V4.78723V4.76596V4.74468H19.9787V4.7234V4.70213V4.68085V4.65957V4.6383H19.9574V4.61702C19.9574 4.57447 19.9362 4.55319 19.9362 4.53191H19.9149V4.51064V4.48936C19.8936 4.44681 19.8723 4.40426 19.8511 4.38298L19.8298 4.3617L19.8085 4.34043V4.31915L19.7872 4.29787H19.766V4.2766L19.7447 4.25532L19.7234 4.23404H19.7021V4.21277L19.6809 4.19149H19.6596L19.6383 4.17021L19.617 4.14894H19.5957V4.12766H19.5745L19.5532 4.10638H19.5319L19.5106 4.08511H19.4894L19.4681 4.06383H19.4468H19.4255V4.04255H19.4043H19.383H19.3617V4.02128H19.3404H19.3191H19.2979H19.2766L19.2553 4H19.234H19.2128H19.1915H19.1702H19.1489H19.1277H19.1064H8.87234C8.38298 4 8 4.38298 8 4.87234C8 5.3617 8.38298 5.74468 8.87234 5.74468H17.0213L4.25532 18.5106C3.91489 18.8511 3.91489 19.4043 4.25532 19.7447C4.59574 20.0851 5.14894 20.0851 5.48936 19.7447L11.8723 13.3617L18.2553 6.97872V15.1277C18.2553 15.617 18.6383 16 19.1277 16Z" fill="#9E9E9E"/>
                </svg>
              </div>
              Госсектор</button>
            <button className='priority-button'>
              <div className='priority-svg'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1277 16C19.617 16 20 15.617 20 15.1277V4.89362V4.87234V4.85106V4.82979V4.80851V4.78723V4.76596V4.74468H19.9787V4.7234V4.70213V4.68085V4.65957V4.6383H19.9574V4.61702C19.9574 4.57447 19.9362 4.55319 19.9362 4.53191H19.9149V4.51064V4.48936C19.8936 4.44681 19.8723 4.40426 19.8511 4.38298L19.8298 4.3617L19.8085 4.34043V4.31915L19.7872 4.29787H19.766V4.2766L19.7447 4.25532L19.7234 4.23404H19.7021V4.21277L19.6809 4.19149H19.6596L19.6383 4.17021L19.617 4.14894H19.5957V4.12766H19.5745L19.5532 4.10638H19.5319L19.5106 4.08511H19.4894L19.4681 4.06383H19.4468H19.4255V4.04255H19.4043H19.383H19.3617V4.02128H19.3404H19.3191H19.2979H19.2766L19.2553 4H19.234H19.2128H19.1915H19.1702H19.1489H19.1277H19.1064H8.87234C8.38298 4 8 4.38298 8 4.87234C8 5.3617 8.38298 5.74468 8.87234 5.74468H17.0213L4.25532 18.5106C3.91489 18.8511 3.91489 19.4043 4.25532 19.7447C4.59574 20.0851 5.14894 20.0851 5.48936 19.7447L11.8723 13.3617L18.2553 6.97872V15.1277C18.2553 15.617 18.6383 16 19.1277 16Z" fill="#9E9E9E"/>
                  </svg>
              </div>
              Retail</button>
            <button className='priority-button'>
            <div className='priority-svg'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1277 16C19.617 16 20 15.617 20 15.1277V4.89362V4.87234V4.85106V4.82979V4.80851V4.78723V4.76596V4.74468H19.9787V4.7234V4.70213V4.68085V4.65957V4.6383H19.9574V4.61702C19.9574 4.57447 19.9362 4.55319 19.9362 4.53191H19.9149V4.51064V4.48936C19.8936 4.44681 19.8723 4.40426 19.8511 4.38298L19.8298 4.3617L19.8085 4.34043V4.31915L19.7872 4.29787H19.766V4.2766L19.7447 4.25532L19.7234 4.23404H19.7021V4.21277L19.6809 4.19149H19.6596L19.6383 4.17021L19.617 4.14894H19.5957V4.12766H19.5745L19.5532 4.10638H19.5319L19.5106 4.08511H19.4894L19.4681 4.06383H19.4468H19.4255V4.04255H19.4043H19.383H19.3617V4.02128H19.3404H19.3191H19.2979H19.2766L19.2553 4H19.234H19.2128H19.1915H19.1702H19.1489H19.1277H19.1064H8.87234C8.38298 4 8 4.38298 8 4.87234C8 5.3617 8.38298 5.74468 8.87234 5.74468H17.0213L4.25532 18.5106C3.91489 18.8511 3.91489 19.4043 4.25532 19.7447C4.59574 20.0851 5.14894 20.0851 5.48936 19.7447L11.8723 13.3617L18.2553 6.97872V15.1277C18.2553 15.617 18.6383 16 19.1277 16Z" fill="#9E9E9E"/>
                </svg>
            </div>
              Приложения</button>
          </div>
          <div className='priority-content-column'>
            <button className='priority-button'>
              <div className='priority-svg'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1277 16C19.617 16 20 15.617 20 15.1277V4.89362V4.87234V4.85106V4.82979V4.80851V4.78723V4.76596V4.74468H19.9787V4.7234V4.70213V4.68085V4.65957V4.6383H19.9574V4.61702C19.9574 4.57447 19.9362 4.55319 19.9362 4.53191H19.9149V4.51064V4.48936C19.8936 4.44681 19.8723 4.40426 19.8511 4.38298L19.8298 4.3617L19.8085 4.34043V4.31915L19.7872 4.29787H19.766V4.2766L19.7447 4.25532L19.7234 4.23404H19.7021V4.21277L19.6809 4.19149H19.6596L19.6383 4.17021L19.617 4.14894H19.5957V4.12766H19.5745L19.5532 4.10638H19.5319L19.5106 4.08511H19.4894L19.4681 4.06383H19.4468H19.4255V4.04255H19.4043H19.383H19.3617V4.02128H19.3404H19.3191H19.2979H19.2766L19.2553 4H19.234H19.2128H19.1915H19.1702H19.1489H19.1277H19.1064H8.87234C8.38298 4 8 4.38298 8 4.87234C8 5.3617 8.38298 5.74468 8.87234 5.74468H17.0213L4.25532 18.5106C3.91489 18.8511 3.91489 19.4043 4.25532 19.7447C4.59574 20.0851 5.14894 20.0851 5.48936 19.7447L11.8723 13.3617L18.2553 6.97872V15.1277C18.2553 15.617 18.6383 16 19.1277 16Z" fill="#9E9E9E"/>
                  </svg>
              </div>
              Телеком</button>
            <button className='priority-button'>
              <div className='priority-svg'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1277 16C19.617 16 20 15.617 20 15.1277V4.89362V4.87234V4.85106V4.82979V4.80851V4.78723V4.76596V4.74468H19.9787V4.7234V4.70213V4.68085V4.65957V4.6383H19.9574V4.61702C19.9574 4.57447 19.9362 4.55319 19.9362 4.53191H19.9149V4.51064V4.48936C19.8936 4.44681 19.8723 4.40426 19.8511 4.38298L19.8298 4.3617L19.8085 4.34043V4.31915L19.7872 4.29787H19.766V4.2766L19.7447 4.25532L19.7234 4.23404H19.7021V4.21277L19.6809 4.19149H19.6596L19.6383 4.17021L19.617 4.14894H19.5957V4.12766H19.5745L19.5532 4.10638H19.5319L19.5106 4.08511H19.4894L19.4681 4.06383H19.4468H19.4255V4.04255H19.4043H19.383H19.3617V4.02128H19.3404H19.3191H19.2979H19.2766L19.2553 4H19.234H19.2128H19.1915H19.1702H19.1489H19.1277H19.1064H8.87234C8.38298 4 8 4.38298 8 4.87234C8 5.3617 8.38298 5.74468 8.87234 5.74468H17.0213L4.25532 18.5106C3.91489 18.8511 3.91489 19.4043 4.25532 19.7447C4.59574 20.0851 5.14894 20.0851 5.48936 19.7447L11.8723 13.3617L18.2553 6.97872V15.1277C18.2553 15.617 18.6383 16 19.1277 16Z" fill="#9E9E9E"/>
                  </svg>
              </div>
              Решение для медицины</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={'keys'}>
    <div className='wrapper'>
      <div className='services-content'>
          <div className='services-title'>      
            <p className='content-title'>Кейс</p>
          </div>
          <div className='menu'>
            <p className='menu-element'>01. Корпоративные сайты</p>
            <hr></hr>
            <p className='menu-element'>02. Сайт визитка</p>
            <hr></hr>
            <p className='menu-element'>03. Информационные сайты</p>
            <hr></hr>
            <p className='menu-element'>04. Интернет магазины  </p>            
          </div>              
        </div>
        <div className='sites'>
          <div className='keys-content'>
            <p className='content-title'>Сайты компаний</p>
            <ul>
              <li>Городские и федеральные порталы</li>
              <li>Государственные онлайн сервисы</li>
              <li>Мобильные сервисы</li>
              <li>Внутренние интерфейсы госсистем</li>
            </ul>
          </div>
          <div className="sites-content">
            <div className="sites-content-header">
              <p>Окружная администрация города Якутск</p>
              <a>Yakutskcity.ru</a>              
            </div>
            <hr></hr>
            <p>Сайт визитка</p>           
            <img src={require("../src/1.png")} className={"sites-content-image"} alt="1" />         
            <div className="sites-content-tags">
              <div className="sites-content-tags-row">
                <button className='tag-php'>Хостинг PHP</button>
                <button className='tag-1c'>Интеграция с 1С</button>
                <button className='tag-comp-site'>композитный сайт</button>
                <button className='tag-solution'>Решение для гос. орг.</button>
              </div>

              
              <button className='tag-solution'>Решение для гос. орг.</button>
      
            </div>
          </div>
      </div>
    </div>
  </div>
    
  <div className={'keys-second'}>
    <div className='wrapper'>
      <div className='right-side'>
        <div className="sites-content">
          <div className="sites-content-header">
            <p>Окружная администрация города Якутск</p>
            <a>Yakutskcity.ru</a>              
          </div>
        <hr></hr>
        <p>Сайт визитка</p>           
        <img src={require("../src/2.png")} className={"sites-content-image"} alt="2" />         
        <div className="sites-content-tags">
          <div className="sites-content-tags-row">
            <button className='tag-php'>Хостинг PHP</button>
            <button className='tag-1c'>Интеграция с 1С</button>
            <button className='tag-comp-site'>композитный сайт</button>
            <button className='tag-solution'>Решение для гос. орг.</button>
          </div>              
            <button className='tag-solution'>Решение для гос. орг.</button>      
          </div>
        </div>
        <div className='title-margintop'>
          <div className='keys-content'>
            <p className='content-title'>Сайты компаний</p>
            <ul>
              <li>Городские и федеральные порталы</li>
              <li>Государственные онлайн сервисы</li>
              <li>Мобильные сервисы</li>
              <li>Внутренние интерфейсы госсистем</li>
            </ul>
          </div>
        </div> 
        <div className="sites-content">
          <div className="sites-content-header">
            <p>Окружная администрация города Якутск</p>
            <a>Yakutskcity.ru</a>              
          </div>
        <hr></hr>
        <p>Сайт визитка</p>           
        <img src={require("../src/3.png")} className={"sites-content-image"} alt="3" />         
        <div className="sites-content-tags">
          <div className="sites-content-tags-row">
            <button className='tag-php'>Хостинг PHP</button>
            <button className='tag-1c'>Интеграция с 1С</button>
            <button className='tag-comp-site'>композитный сайт</button>
            <button className='tag-solution'>Решение для гос. орг.</button>
          </div>              
            <button className='tag-solution'>Решение для гос. орг.</button>      
          </div>
        </div>
        <div className="sites-content">
          <div className="sites-content-header">
            <p>Окружная администрация города Якутск</p>
            <a>Yakutskcity.ru</a>              
          </div>
        <hr></hr>
        <p>Сайт визитка</p>           
        <img src={require("../src/4.png")} className={"sites-content-image"} alt="4" />         
        <div className="sites-content-tags">
          <div className="sites-content-tags-row">
            <button className='tag-php'>Хостинг PHP</button>
            <button className='tag-1c'>Интеграция с 1С</button>
            <button className='tag-comp-site'>композитный сайт</button>
            <button className='tag-solution'>Решение для гос. орг.</button>
          </div>              
            <button className='tag-solution'>Решение для гос. орг.</button>      
          </div>
        </div>         
      </div>
    </div>
  </div>

  <div className='about'>
    <div className='wrapper'>
      <div className='about-content'>
        <div className='about-title'>
          <p className='content-title'>О нас</p>
        </div>
        <div className='about-content-text'>
          <p className='about-title-font'>Дизайн и консалтинговая компания, которая создает новые отношение людей с окружающим их цифровым миром</p>
          <p>Мы верим, что цифровые сервисы подобно человеческим отношениям, проходят через различные этапы взаимодействия
             - от первой встречи до настоящей любви. С эмоциональным, ореинтированным для людей подходом, мы испоьзуем 
             дизайн чтобы создать опыт, который любят люди  </p>
        </div>
      </div>
      <div className='about-progress'>
        <div className='progress'>
          <div className='plussvg'><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0392 0H17.0444V15.0392H32V17.0444H17.0444V32H15.0392V17.0444H0V15.0392H15.0392V0Z" fill="#0B0B0B"/>
            </svg>
          </div>
          <p className='progress-text'>Lorem ipsum dolor sit amet.</p>
          <p className='progress-number'>8</p>
        </div>
        <line></line>
        <div className='progress'>
          <div className='plussvg'><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0392 0H17.0444V15.0392H32V17.0444H17.0444V32H15.0392V17.0444H0V15.0392H15.0392V0Z" fill="#0B0B0B"/>
            </svg>
          </div>
          <p className='progress-text'>Lorem ipsum dolor sit amet.</p>
          <p className='progress-number'>10</p>
        </div>
        <line></line>
        <div className='progress'>
          <div className='plussvg'><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0392 0H17.0444V15.0392H32V17.0444H17.0444V32H15.0392V17.0444H0V15.0392H15.0392V0Z" fill="#0B0B0B"/>
            </svg>
          </div>
          <p className='progress-number'>13</p>
          <p className='progress-text'>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  </div>

  <div className='news'>
    <div className='wrapper'>
      <div className='news-title'>
        <p className='content-title'>Новости</p>
        <div className='news-cards'>
          <div className='news-card'>
            <img src={require("../src/news.png")} className={"news-image"} alt="news" />
            <p className='about-title-font'>Дизайн и консалтинговая компания.</p>
            <p>28 декабря 2021</p>  
          </div>
          <div>
            <img src={require("../src/news.png")} className={"news-image"} alt="news" />
            <p className='about-title-font'>Дизайн и консалтинговая компания.</p>
            <p>28 декабря 2021</p>    
          </div>
          <div>
            <img src={require("../src/news.png")} className={"news-image"} alt="news" />
            <p className='about-title-font'>Дизайн и консалтинговая компания.</p>
            <p>28 декабря 2021</p>     
          </div>
        </div>
      </div>
    </div>
  </div>

    <footer className='footer'>
      <div className='wrapper'>
        <div className='contacts'>
          <p className='footer-title'>Контакты</p>
            <div className='contacts-content'>
              <p>+7 (4112) 318-813</p>
              <p>+7 (964) 429-41-78</p>
              <p>г. Якутск, ул. Хабарова, 19/3,</p>
              <p>1 этаж, 2 крыльцо, офис 35</p>
              <p>www.Platforma.bz</p>
              <div className='messengers'>
                <div><SocialIcon network="instagram" fgColor="#757575" bgColor="#0B0B0B" style={{ height: 50, width: 50 }} /></div>
                <div><SocialIcon network="telegram" fgColor="#757575" bgColor="#0B0B0B" style={{ height: 50, width: 50 }} /></div>
                <div><SocialIcon network="whatsapp" fgColor="#757575" bgColor="#0B0B0B" style={{ height: 50, width: 50 }} /></div>
                <div><SocialIcon network="facebook" fgColor="#757575" bgColor="#0B0B0B" style={{ height: 50, width: 50 }} /></div>
                <div><SocialIcon network="youtube" fgColor="#757575" bgColor="#0B0B0B" style={{ height: 50, width: 50 }} /></div>
              </div>
            </div>
        </div>
        <div className='nav-footer'>
          <p className='footer-title'>Карта сайта</p>
          <div className='nav-container-footer'>
            <a>Главная</a>
            <a>Услуги</a>
            <a>Кейсы</a>
            <a>О нас</a>
            <a>Контакты</a>
            <a>Битрикс 24</a>
          </div>
          <div className='nav-container-footer'>
            <a>Новости</a>
          </div>
          <div className='nav-container-footer'>
            <div className='footer-button-layout'>
              <button className='footer-button'>Отправить заявку</button>
            </div>
          </div>
        </div>
        
      </div>
    </footer>      
    </>
    
  );

}

export default App;