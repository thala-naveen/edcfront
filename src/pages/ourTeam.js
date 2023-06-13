import Modal1 from '../components/modal/modal1/modal1'
import Modal2 from '../components/modal/modal3/Modal3'
import './style/Modal1.css'
import './style/Modal3.css'
import Header from '../components/header'
import Footer from '../components/foooterHero/footer'

export default function Model3() {
  return (
  <div>
    {/* <Modal1 /> */}
    <Header/>
    <Modal2 />
    </div>
  );
}