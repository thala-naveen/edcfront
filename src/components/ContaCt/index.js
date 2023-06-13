import React,{useState,useEffect} from 'react'
import './index.css';
import Swal from 'sweetalert2'


function ContaCt() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    
    const submitted = () => {
  
      fetch(`https://edcbackend-production.up.railway.app/fillContact?name=${name}&email=${email}&subject=${subject}&message=${message}`)
      .then((res) => res.json())
      .then((data) => {
          if (data.status != "Contact Form Has Been Submittted Successfully !"){
            Swal.fire ({title: 'Warning!',
            text: data.status,
            icon: 'warning'});
          }
  
          else{
            Swal.fire ({title: 'Success!',
            text: data.status,
            icon: 'success'});
          }
  
          let inps = document.getElementsByClassName('contact_input');
  
          for (let i=0;i<inps.length ;i++){
            inps[i].value = "";
          }

          document.getElementById('textMsg').value = "";
      });
  
  
    }

	return (
		<>
            <div className="Contact-us">
            <div className="Contact-box">
                <div className="Contact-Heading">Contact Us</div>
                <div className="Contact-details">
                    <input className='contact_input' type="text" onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
                    <input className='contact_input' type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='E-mail'/>
                    <input className='contact_input' type="text" onChange={(e)=>setSubject(e.target.value)} placeholder='Subject' />
                    <textarea id="textMsg" onChange={(e)=>setMessage(e.target.value)} placeholder='Enter your Message Here'></textarea>
                    <button type="button" onClick={submitted}>Submit</button>
                </div>
                </div>
            </div>

        </>
	)
}

export default ContaCt;