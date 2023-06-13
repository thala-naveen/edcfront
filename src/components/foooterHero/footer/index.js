import { Link } from 'react-router-dom'
import styles from './index.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Footer(){

      return (
         <>
            <footer>
            <div className="footer_container">
               <div className="footer_row" style={{paddingTop:50}}>
                  <div className="footer_col">
                     <p className="footer_h4" id='edc'>ED-Cell</p>
                     <ul className="footer_ul" style={{lineHeight:5}}>
                        <li className="footer_li"><p className="footer_a">About Us</p></li>
                        <li className="footer_li"><p className="footer_a">Our Startups</p></li>
                        <li className="footer_li"><p className="footer_a">Accomplishment</p></li>
                        <li className="footer_li"><p className="footer_a">Our Team</p></li>
                     </ul>
                  </div>
                  <div className="footer_col">
                  <p className="footer_h4">Campaign</p>
                     <ul className="footer_ul" style={{lineHeight:5}}>
                        <li className="footer_li"><p className="footer_a">Ideabox</p></li>
                        <li className="footer_li"><p className="footer_a">Past Events</p></li>
                        <li className="footer_li"><p className="footer_a">Upcoming Events</p></li>
                        <li className="footer_li"><p className="footer_a">Winners</p></li>
                     </ul>
                  </div>
                  <div className="footer_col" id="footer_follow">
                  <h4 className="footer_h4">follow us</h4>
                     <div className="footer_social_links">
                        <div className="footer_a"><div className="footer_facebook"><Link to={'https://www.instagram.com/startupcellmits/'}><InstagramIcon sx={{marginTop:1}}/></Link></div> </div>
                        <div className="footer_a"><div className="footer_twitter"><Link to={'https://www.linkedin.com/company/startup-cell-mits/'}><LinkedInIcon sx={{marginTop:1}}/></Link></div></div>
                        <div className="footer_a"><div className="footer_instagram"><Link to={'mailto:startupcell@mitsgwalior.in'}><EmailIcon sx={{marginTop:1}}/></Link></div></div>
                        {/* <div className="footer_a"><div className="footer_linkedin"></div></div> */}
                     </div>
                     <h4 className="footer_h4">Location</h4>
                     <div className="footer_social_links">
                        {/* <div className="footer_a"><div className="footer_facebook"><Link to={'https://www.instagram.com/startupcellmits/'}><InstagramIcon sx={{marginTop:1}}/></Link></div> </div> */}
                        {/* <div className="footer_a"><div className="footer_twitter"><Link to={'https://www.linkedin.com/company/startup-cell-mits/'}><LinkedInIcon sx={{marginTop:1}}/></Link></div></div> */}
                        {/* <div className="footer_a"><div className="footer_instagram"><Link to={'mailto:startupcell@mitsgwalior.in'}><EmailIcon sx={{marginTop:1}}/></Link></div></div> */}
                        <div className="footer_a"><div className="footer_linkedin"><Link to={'https://goo.gl/maps/2c3idnpCmgkimLbSA'}><LocationOnIcon sx={{marginTop:1}}/></Link></div></div>
                        <h6 style={{color:'white'}}> Startup Cell<br/>Drone Buliding<br/>Madhav Institute of Technology & Science Gwalior</h6>
                     </div>
                  </div>
               </div>
               
            </div>
            <p className="copyright" style={{color:'white',fontSize:15}}>&copy; <Link sx={{color:"white"}} to='https://mitsgwalior.in'>mitsgwalior.in</Link></p>
         </footer>
         </>
            
      )
      }
