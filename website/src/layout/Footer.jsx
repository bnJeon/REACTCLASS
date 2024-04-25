import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Footer (){
    useEffect(() => {
        function handleScroll() {
          const footer = document.querySelector('footer');
          const windowHeight = window.innerHeight;
          const footerTop = footer.getBoundingClientRect().top;
    
          // 스크롤이 푸터의 상단에 닿으면 애니메이션 추가
          if (footerTop < windowHeight) {
            footer.classList.add('animate-footer');
          } else {
            footer.classList.remove('animate-footer');
          }
        }
    
        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);
    
        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  return (
    <footer className="bg-black text-center text-white">
      <div className="container p-4">
        <section className="text-white">
          <h1>Glossy</h1>
        </section>
        <section className="">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li><a className="text-body" href="#!">Link 1</a></li>
                <li><a className="text-body" href="#!">Link 2</a></li>
                <li><a className="text-body" href="#!">Link 3</a></li>
                <li><a className="text-body" href="#!">Link 4</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li><a className="text-body" href="#!">Link 1</a></li>
                <li><a className="text-body" href="#!">Link 2</a></li>
                <li><a className="text-body" href="#!">Link 3</a></li>
                <li><a className="text-body" href="#!">Link 4</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li><a className="text-body" href="#!">Link 1</a></li>
                <li><a className="text-body" href="#!">Link 2</a></li>
                <li><a className="text-body" href="#!">Link 3</a></li>
                <li><a className="text-body" href="#!">Link 4</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li><a className="text-body" href="#!">Link 1</a></li>
                <li><a className="text-body" href="#!">Link 2</a></li>
                <li><a className="text-body" href="#!">Link 3</a></li>
                <li><a className="text-body" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">suaaa@gmail.com</a>
      </div>
    </footer>    
  );
}
