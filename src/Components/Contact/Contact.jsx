import {useState,React} from 'react'
import './Contact.css'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";




function Contact() {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eac03862-486d-4085-8431-34a1e57d3049");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
    <div className='contact-page'>
        <h2>Let's Connect</h2>
        <div className="contact-container">
            <div className="left">
                  <h2>Contacts</h2>
                  <p>I am currently open to taking on new projects. If you have any ideas or initiatives you’d like to discuss, please feel free to reach out. I am available to connect at your convenience.</p>
                  <div className="details">
                    <div className="mail det"><IoMdMail/><p>gauravshr889@gmail.com</p></div>
                    <div className="phone det"><FaPhoneAlt/><p>+91 8340609998</p></div>
                    <div className="location det" ><IoLocation/><p>Patna,India</p></div>
                  </div>
            </div>
            
                <form 
                 onSubmit={onSubmit} className='right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter Your Name" name='name' />
            <label htmlFor=''>
           Your Email
            </label>
            <input type="email" placeholder="Enter Your Email" name="email" id="" />
            <label htmlFor="">
                Write Your Message Here
            </label>
            <textarea name="message" rows="6" placeholder='Enter Your Message'></textarea>

            <button type='submit' className='submit'>Submit Now</button>
                </form>
           
        </div>
    </div>
  )
}

export default Contact