import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import CustomButton from './CustomButton.jsx';
import React, { useState, useEffect } from 'react';
import {Carousel } from 'react-bootstrap';
import data from './data.js';
import { Route,Routes} from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx'
import Best from './components/Best.jsx';
import New from './components/New.jsx';
import Detail from './Detail.js';
import Collection from './components/Collection.jsx';
import Notice from './components/Notice.jsx';
import YouTube from "react-youtube";

function App() {
  
  const [scrollY, setScrollY] = useState(0);
  const [isLimitedAnimated, setIsLimitedAnimated] = useState(false);
  const [isPremiumAnimated, setIsPremiumAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    
    const limitedEditionSection = document.querySelector('.limited-edition-section');
    const premiumEditionSection = document.querySelector('.premium-edition-section');

    const handleScrollAnimation = () => {

      if (!limitedEditionSection || !premiumEditionSection) return;

      const sectionTopLimited = limitedEditionSection.offsetTop;
      const sectionTopPremium = premiumEditionSection.offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollY > sectionTopLimited - windowHeight && !isLimitedAnimated) {
        setIsLimitedAnimated(true);
      }

      if (scrollY > sectionTopPremium - windowHeight && !isPremiumAnimated) {
        setIsPremiumAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScrollAnimation);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, [scrollY, isLimitedAnimated, isPremiumAnimated]); // 의존성 목록에 isLimitedAnimated와 isPremiumAnimated 추가

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  let [libs] = useState(data);

  return (
    <div className="App">
      <Header style={{ top: `${scrollY}px` }}  />
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <h1 className="my-3">Best</h1>
              <Carousel className="carousel carousel-dark slide">
                {chunkArray(libs.slice(0, 8), 3).map((group, index) => (
                  <Carousel.Item key={index}>
                    <div className="row text-dark">
                      {group.map((lib, idx) => (
                        <Card key={idx} lib={lib} image={lib.image} />
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="container">
              <h1 className="text-end my-3">New</h1>
              <Carousel className="carousel carousel-dark slide">
                {chunkArray(libs.slice(9, 17), 3).map((group, index) => (
                  <Carousel.Item key={index}>
                    <div className="row text-dark">
                      {group.map((lib, idx) => (
                        <Card key={idx} lib={lib} image={lib.image} />
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="bg-black mt-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div>
                <h1 className="text-center text-white">Collection</h1>
                <video muted autoPlay loop style={{ width: '100%', height:'auto' }}>
                  <source src="/img/collection.mp4" type="video/mp4" />
                </video>
                <p className="text-white">
                풍성한 컬러를 더해 자신감 넘치는 매력을 발산해보세요</p>
              </div>
            </div>
            <div className="bg-black" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <YouTube
                videoId="HVytZ0c2cmw" // 동영상 주소
                opts={{
                  width: "100%",
                  height: "500px",
                  playerVars: {
                    autoplay: 0, // 자동 재생 여부 
                    modestbranding: 1, // 컨트롤 바에 유튜브 로고 표시 여부
                    loop: 1, // 반복 재생
                  },
                }}
              />
            </div>
            <div className={`container my-3 ${isLimitedAnimated ? 'fadeInRight' : ''} limited-edition-section`}>
              <h1>Limited Edition</h1>
              <div className="text-center">
              <img src="/img/limited.jpg" alt="limited."  style={{width:'100%', height:'400px'}}/>
              <h2>Collection</h2>
              <p>한정판 에디션</p>
              <CustomButton text="Buy" />
              </div>
            </div>
            <div className={`container my-3 ${isPremiumAnimated ? 'fadeInLeft' : ''} premium-edition-section`}>
              <h1 className="text-end">Premium Edition</h1>
              <div className="text-center">
              <img src="/img/premium.jpg" alt="limited."  style={{width:'100%', height:'400px'}}/>
              <h2>Collection</h2>
              <p>프리미엄 에디션</p>
              <CustomButton text="Buy" />
              </div>
            </div>
            <Footer style={{ bottom: `-${scrollY}px` }}  />
          </>
        } />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/best" element={<Best />} />
        <Route path="/new" element={<New />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/detail/:id" element={<Detail libs={libs} />} />
        <Route path="/notice" element={<Notice />} />

      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4 text-center">
      <img src={props.image} width="50%" alt="lib" />
      <h5>{props.lib.title}</h5>
      <h6>{props.lib.price}</h6>
      <CustomButton text="Buy" />
    </div>
  );
}


export default App;
