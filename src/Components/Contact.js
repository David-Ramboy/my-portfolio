
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){
    
        const form = useRef();
           
        const letSendTheEmail = (e) => {
                e.preventDefault();
            
                emailjs.sendForm('service_ym1t6ws', 'template_js6ackk', form.current, 'mTFDMliTLdvL7Wlh5')
                  .then((result) => {
                      console.log(result.text);
                      alert('message sent')
                  }, (error) => {
                      console.log(error.text);
                  });
              };

    return(
        <div className='contact-section container' id="contacts">
            <form  ref={form}>
                <label className='contact-label'>
                    <h1> Contact me </h1>

                    <div className='input--section'>
                        <input type='text' id="name" name="user_name" placeholder='Your Name' className='input--text' />
                        <input type='email'  id="email" name="user_email" placeholder='Email' className='input--text' />
                        <textarea type='text' name="message" id="message" placeholder='Your Messages Here' className='input--textarea'/>
                    </div>
                </label>
                <input type="submit" value='send'/>
            </form>
           
        </div>
    )
}
