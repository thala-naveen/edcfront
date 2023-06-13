import './index.scss'
import img from '../../../public/ourstartups.png'

export default function Carousel() {
return (
<div className='startupCarousel'>
<p className='startupTitle'>Our Startups</p>
<div className="imageWrapper">
<img src={img} alt="Startup 7" />
</div>
</div>
)
};