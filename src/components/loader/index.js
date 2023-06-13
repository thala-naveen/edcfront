import './index.scss'
import Divider from '@mui/material/Divider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function HeroHeader(){
    useEffect(() => {
        AOS.init();
      }, [])
return (
    <div className="hero_container">
        <div style={{position: 'absolute',top: '50%',transform: 'translateY(-50%)'}}>
            {/* <div className="hero_box1"></div> */}
            <p data-aos="fade-up" data-aos-duration="1500" className="hero_edc">STARTUP CELL</p>

            {/* <div className="hero_box2"></div> */}
            <p data-aos="fade-up" data-aos-duration="2000" className="hero_college">MITS Gwalior</p>
            <Divider data-aos="fade-right"
     data-aos-offset="200"
     data-aos-duration="1500"
     data-aos-easing="ease-in-sine" sx={{bgcolor:'rgba(252, 186, 3, 1)',width:'100%',height:'5px',marginLeft:'19%'}}/>
            {/* <div className="hero_box3"></div> */}
    </div>
    </div>
)
}

// export default function HeroHeader() {
//     return(
//         <>
//             <div style={{width:'100%',height:'100vh',color:"black"}}>

//             </div>
//         </>
//     )
// }