import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../public/boot_camp2.jpg'
import img2 from '../../public/ajantya.jpg'
import img3 from '../../public/boot_camp.jpg'
import img4 from '../../public/visit.jpg'

export default function HeroHeader(){

return (
    <OwlCarousel 
  className='owl-carousel owl-theme' 
  margin={0} 
  autoplay 
  autoplayTimeout={2000} 
  animateOut={'fadeOut'} 
  items={1} 
  stagePadding={0} 
  smartSpeed={250}
  dots={false}
  loop
>
   
    <div><img src={img2} style={{width:'100vw',height:'auto'}}></img></div>
    <div><img src={img3} style={{width:'100vw',height:'auto'}}></img></div>
    <div><img src={img4} style={{width:'100vw',height:'auto'}}></img></div>
    <div>
    <img src={img1} style={{width:'100vw',height:'auto'}}></img>
    </div>
    </OwlCarousel>
)
}