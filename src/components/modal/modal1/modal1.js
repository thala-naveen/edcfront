import Member1 from '../../Assets/Member1.jpg';
import Member2 from '../../Assets/Member2.jpg';
import Member3 from '../../Assets/Member3.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Model1() {
  return (
    <div id='model1'>
        <h1 className='model-title'>Team Model 1</h1>
        <div className="divider"></div>
        <div className="members" style={{display:'flex',justifyContent:'space-around'}}>
          <div className="member">
            <img width={400} height={400} src={Member1}/>
            <div className="description">
                <h1>Ahmed ALAMI</h1>
                <h2>CEO</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={400} src={Member2}/>
            <div className="description">
                <h1>Omar Nadir</h1>
                <h2>CEO</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={400} src={Member3}/>
            <div className="description">
                <h1>Khaled MAHER</h1>
                <h2>CEO</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}
