import Member1 from '../../../public/director.jfif';
import Member2 from '../../../public/ankit.jpeg';
import Member3 from '../../../public/varun.jpeg';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Model3() {
  return (
    <div id='model3'>
        <div className="divider"></div>
        <div className="members" style={{display:'flex',justifyContent:'space-around',marginTop:'10vh'}}>
          <div className="member">
            <img width={200} height={200} style={{objectFit:'cover'}} src={Member1}/>
            <div className="description">
                <h1>Dr. R.K. Pandit</h1>
                <h2>Chairmain</h2>
                {/* <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p> */}
                {/* <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div> */}
            </div>
          </div>
          <div className="member">
            <img width={200} height={200} src={Member2}/>
            <div className="description">
                <h1>Dr. Ankit Tiwari</h1>
                <h2>Faculty Coordinator</h2>
                {/* <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div> */}
            </div>
          </div>
          <div className="member">
            <img width={200} height={200} src={Member3}/>
            <div className="description">
                <h1>Dr. Varun Sharma</h1>
                <h2>Faculty Coordinator</h2>
                {/* <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div> */}
            </div>
          </div>
        </div>
    </div>
  );
}