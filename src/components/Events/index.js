import img1 from '../../public/download.jpg';
import { Component, useEffect, useState} from 'react';
import './index.css'
import img from '../../public/V (4).png'
import img2 from '../../public/Screenshot 2023-03-28 210626.png'
import img3 from '../../public/Screenshot 2023-03-28 211148.png'
import img4 from '../../public/Screenshot 2023-03-28 211335.png'


export function Events() {
  useEffect(() => {
  const observerimg = new window.IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('showimg');
        }
    });
  });
  const observertext = new window.IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('showtext');
        }
    });
  });
  const hiddenImg = document.querySelectorAll('.hiddenimg');
  hiddenImg.forEach((el)=> observerimg.observe(el));
  const hiddenText = document.querySelectorAll('.hiddentext');
  hiddenText.forEach((el)=> observertext.observe(el)); 
})


  return (
    <>
    
    <section className="services">
      <h2 className="heading-3">Our Past Events</h2>
    </section>
    
    <section className="feature-row">
      <div className="columns">
        <div className="column-1">
          <div className="hiddenimg"><img src={img} alt="edc"></img></div>
        </div>
        <div className="column-2">
          <div className="main-feature-group hiddentext">
          <div className="readme-content">
            <h2>STOCK-UP BUSINAR</h2>
            <p>📈Have you ever made your profile on stock investment platforms but left your profile untouched because you fear losing/ don't ace in the topic.
            ¿Do you feel you're not even a jack in this trade?👀
            💵You have ideas but lack help with building prototypes/ investors etc.
            Or you're wondering how to begin with all this ??</p>
          </div>
            </div>
        </div>
      </div>
    </section>

    <section className="feature-row">
      <div className="columns">
        <div className="column-1">
          <div className="hiddenimg img2"><img src={img2} ></img></div>
        </div>
        <div className="column-2">
          <div className="main-feature-group hiddentext">
          <div className="readme-content">
          <h2>LEGAL ADAPT -Kickstart your Startup</h2>
            <p>A live talk 💬show with Ms. BHAWNA VISHWAKARMA and Mr. ANKIT RANA,  law experts working as a legal consultant and company secretary respectively where they will explain Young Entrepreneurs about the legal issues that arise in the start up journey and how to deal with them. </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="feature-row">
      <div className="columns">
        <div className="column-1">
          <div className="hiddenimg"><img src={img3} ></img></div>
        </div>
        <div className="column-2">
          <div className="main-feature-group hiddentext">
          <div className="readme-content">
            <h2>AI-Botics</h2>
            <p>The Startup Cell MITS presents an expert talk on AI and Robotics by Mr. Arijit Hajra, The CEO of  Think Again labs ,Cofounder at Space app India ,Mentor of change at Atal Innovation Mission by Government of India and Talk show host at Space talk India. </p>
          </div>
          </div>
        </div>
      </div>
    </section>

    <section className="feature-row">
      <div className="columns">
        <div className="column-1">
          <div className="hiddenimg"><img src={img4} ></img></div>
        </div>
        <div className="column-2">
          <div className="main-feature-group hiddentext">
          <div className="readme-content">
            <h2>Hult Prize @MITS</h2>
            <p>The Hult Prize Accelerator Program is a cutting-edge program that provides living and working spaces, along with the opportunity to home business skills, network, and prepare for launch - through a retribution of classes, workshops, pitches, and multidisciplinary experts, coaches and leaders  </p>
          </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

