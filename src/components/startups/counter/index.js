import './index.scss'
import React,{useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import startup from '../../../public/startups.png'
import pitches from '../../../public/pitches.png'
import events from '../../../public/events.png'
import users from '../../../public/users.png'

export default function Counter() {

    const [counter,setCounter]=useState(false)

    return (
        <>
        <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
            <div className="count_container" style={{display:'flex',flexWrap:'wrap'}}>
                <div className="count_item">
                    <img src={startup} className="count_box1"></img>
                    <div className="fontss">
                        <div className="texx">startups</div>
                        {counter && <CountUp className='count' start={0} end={7} duration={2} delay={2} prefix=" +" enableScrollSpy={true}/>}
                    </div>
                </div>

                <div className="count_item">
                    <img src={pitches} className="count_box1"></img>
                    <div className="fontss">
                        <div className="texx">Pitches</div>
                        {counter && <CountUp className='count' start={0} end={30} duration={3} delay={2} prefix=" +" enableScrollSpy={true}/>}
                    </div>
                </div>

                <div className="count_item">
                    <img src={events} className="count_box1"></img>
                    <div className="fontss">
                        <div className="texx">Events</div>
                        {counter && <CountUp className='count' start={0} end={7} duration={3} delay={2} prefix=" +" enableScrollSpy={true}/>}
                    </div>
                </div>

                <div className="count_item">
                    <img src={users} className="count_box1"></img>
                    <div className="fontss">
                        <div className="texx">Users</div>
                        {counter && <CountUp className='count' start={0} end={4000} duration={5} delay={2} prefix=" +" enableScrollSpy={true}/>}
                    </div>
                </div>
            </div>
        </ScrollTrigger>
        </>
    )
};
