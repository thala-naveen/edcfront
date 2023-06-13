import './index.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function AboutUs() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className="about-container" id="aboutUs">
        <div className="row about-us">
          <div className="col about-us-text">
            <div className="row about-us-heading">
              <h1 style={{ margin: 0, padding: 0 }}>About Us</h1>
            </div>
            <div className="row about-us-para" style={{ marginTop: 20 }}>
              <p>Start-Up Cell MITS Gwalior was established under Technical Education Quality Improvement Programme, Phase III TEQIP-IIIas per the Start-up policy launched by AICTE on 16th November 2016.</p>
            </div>
            <div className="row box-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="col box">
                <h3>Our Vision</h3>
                <p>Our vision is to create a hub of opportunities and resources for the young ideators in central India.</p>
              </div>
              <div className="col box">
                <h3>Our Mission</h3>
                <p>To create a self sustainable platform for all the stakeholders in and around MITS willing to unleash their potential as idea progenitor and executor.</p>
              </div>
              
              <div className="col box">
                <h3>Our Values</h3>
                <p>Creative problem solving<br/> Open communication </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
