import React,{useEffect,useState} from 'react'
import styles from './style/index.module.scss'
import './style/event.css'
import Img from '../public/download.jpg'
import Header from '../components/header';
import Footer from '../components/foooterHero/footer';
import { Events } from '../components/Events';
import imgg from '../public/idea.jpg'
import Swal from 'sweetalert2';

export default function Event(){
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
      };

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [idea, setIdea] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = () =>{


    fetch('https://edcbackend-production.up.railway.app/IdeaBoxForm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: name,
        email: email,
        Idea : idea,
        phone : contact,
    })
  })
    .then (response => response.json ())
    .then ((data)=>{

      if (data.status != "Idea Box Form has been Submitted Successfully !"){
        Swal.fire ({title: 'Warning!',
        text: data.status,
        icon: 'warning'});
      }
  
      else{
        Swal.fire ({title: 'Success!',
        text: data.status,
        icon: 'success'});
        let inps = document.getElementsByClassName('event_input');
    
        for (let i=0;i<inps.length ;i++){
            if (inps[i].type != "submit"){
              inps[i].value = "";

            }
        }
      }
    })



    
  }

      
      return (
        <div>
        <div style={{position:'-webkit-sticky',zIndex:100000}}><Header /></div>
          <Events/>
          <div className="events_active_event">
            <div className="events_active_event_heading">IDEA BOX</div>
            {/* <form> */}
              <div class = 'event_form'>
              <label class='event_label' htmlFor="name">Name:</label>
              <input class='event_input' type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} name="name" required />
              <label class='event_label' htmlFor="email">Email:</label>
              <input class='event_input' type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}  name="email" required />
              <label class='event_label' htmlFor="Phone">Phone:</label>
              <input class='event_input' type="text" id="Phone" value={contact} onChange={(e)=>setContact(e.target.value)}  name="Phone" required />
              <label class='event_label' htmlFor="idea">IDEA</label>
              <input class='event_input' type="text" id="idea" value={idea} onChange={(e)=>setIdea(e.target.value)}  name="idea" required />
              
              <input class='event_input' type="submit" onClick={handleSubmit} defaultValue="Register" />
              </div>
            {/* </form>   */}
          </div>
          <div style={{marginTop:'-150px'}}><Footer /></div>
        </div>
      );
    }