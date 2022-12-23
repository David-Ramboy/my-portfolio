import React from 'react'

export default function Contact(){

    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div className='contact-section container'>
            <form onSubmit={handleSubmit}>
                <label className='contact-label'>
                    <h1> Contact me </h1>

                    <div className='input--section'>
                        <input type='text' placeholder='Your Name' className='input--text' />
                        <input type='text' placeholder='Email' className='input--text' />
                        <input type='text' placeholder='Phone No.' className='input--text' />
                        <textarea type='text' placeholder='Your Messages Here' className='input--textarea'/>
                    </div>
                </label>
                <button>Send</button>
            </form>
        </div>
    )
}
