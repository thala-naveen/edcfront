import { useState, useEffect } from 'react'
import styles from './style/index.module.scss'
import Loader from '../components/loader'
import AboutUs from '../components/aboutUs'
import Startups from '../components/startups'
import FooterHero from '../components/foooterHero/footer/index'
import Header from '../components/header'
import './style/global.css'
import HeroHeader from '../components/heroHeader'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Contact from "../components/ContaCt/index";

export default function Home(){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500); 
    }, []);
    const loaderStyles = {
        opacity: 1,
        animation: `${styles.loaderMove} 2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards`,
        animationIterationCount: 'infinite',
        animationDirection: 'normal',
        animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        animationDelay: '2s',
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      };
      

    return (
        <div className={styles.container}>
            {loading? <div className={styles.loader} style={loaderStyles}><Loader/></div>: 
            <div>
                <div style={{position:'-webkit-sticky',zIndex:100000}}><Header/></div>
                <div className={styles.section} style={{zIndex:10000}}><HeroHeader/></div>
                <div className={styles.section}><AboutUs/></div>
                <div className={styles.section} style={{zIndex:10000}}><Startups/></div>
                <div className={styles.section}><Contact /></div>
                <div className={styles.section} style={{zIndex:10000}}><FooterHero/></div>
            </div>}
        </div>
    )
};
