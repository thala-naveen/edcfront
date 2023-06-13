import React,{useState,useEffect} from 'react'
import "./index.css"
import Swal from 'sweetalert2';

export default function Registration() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [enroll, setEnroll] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [contact, setContact] = useState('');
  const [eventId, setEventId] = useState('');

  let form = new FormData();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Handle form submission logic or perform other actions
    
    form.append('name',name)
    form.append('eventId',6)
    form.append('enrollNo',enroll)
    form.append('email',email)
    form.append('branch',branch)
    form.append('phone',contact)
    form.append('year',year)



    fetch('https://edcbackend-production.up.railway.app//EventForm', {
      method: 'POST',
      body: form
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.status != "You Have Registered Successfully !"){
          Swal.fire ({title: 'Warning!',
          text: data.status,
          icon: 'warning'});
        }

        else{
          Swal.fire ({title: 'Success!',
          text: data.status,
          icon: 'success'});
        }

        let inps = document.getElementsByClassName('registration_input');

        for (let i=0;i<inps.length ;i++){
          inps[i].value = "";
        }
    });


  }

    return (
      <>
        <div className="registration_container" id="registration">
        <div className="registration_main">
        <div className="registration_header">
          <h2 class='registration_header_main'>REGISTRATION FORM</h2>
          <h1 class='registration_header_sub'>Workshop and summit hybrid</h1>
          <p class='registration_header_des'>Enroll here:-</p>
        </div>
        <div className="registration_contactus">
          <div>
            <form onSubmit={handleSubmit}>
            <input className='registration_input' value={email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Enter Email" required></input>
            <input className='registration_input' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" required></input>
            <input className='registration_input' value={enroll} onChange={(e)=>setEnroll(e.target.value)} type="text" placeholder="Enter Enrollment Number" required></input>
            <input className='registration_input' value={branch} onChange={(e)=>setBranch(e.target.value)} type="text" placeholder="Enter Branch" required></input>
            <input className='registration_input' value={contact} onChange={(e)=>setContact(e.target.value)} type="text" placeholder="Enter Contact Details" required></input>
            <input className='registration_input' value={year} onChange={(e)=>setYear(e.target.value)} type="text" placeholder="Enter Your Year" required></input>
            <input value={5} onChange={(e)=>setEventId(e.target.value)} type="text" placeholder="Enter Your Event Id" required hidden></input>
            <center><button class='registration_button' type="submit" style={{padding:2}}>Submit</button></center>
            </form>
          </div>
        </div>
      </div>
      </div>
      </>
    )
  };
  
