
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){
    
        const form = useRef();
        
        const [formValue, setFormValue] = useState({
            name:"",
            email:"",
            message:""
        })

        const {name, email, message} = formValue 
        const letSendTheEmail = (e) => {
            e.preventDefault();
            setFormValue(prev =>{return{
                name:"",
                email:"",
                message:""
            }})
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
            <form  ref={form} onSubmit={letSendTheEmail}>
                <label className='contact-label'>
                    <h1> Contact me </h1>

                    <div className='input--section'>
                        <input type='text' required id="name" name="user_name" placeholder='Your Name' className='input--text' onChange={(e)=>setFormValue(prev => {return{...prev, name:e.target.value}})} value={name}/>
                        <input type='email'  id="email" required name="user_email" placeholder='Email' className='input--text'onChange={(e)=>setFormValue(prev => {return{...prev, email:e.target.value}})} value={email} />
                        <textarea type='text' name="message" required id="message" placeholder='Your Messages Here' className='input--textarea' onChange={(e)=>setFormValue(prev => {return{...prev, message:e.target.value}})} value={message}/>
                    </div>
                </label>
                <input type="submit" value='send'/>
            </form>
           
        </div>
    )
}
