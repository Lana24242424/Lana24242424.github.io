import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import AnimatedLetters from './AnimatedLetters'

function ContactForm() {
  const [state, handleSubmit] = useForm("xyyaldog");
  if (state.succeeded) {
      return <p>Thanks for your message!</p>;
  }
  return (
      <div className='second-form'>
        <div className='mb-5'>
        <AnimatedLetters strArray={'Contact'.split('')} />
        </div>
      <form className='flex flex-col w-96' onSubmit={handleSubmit}>
      <label className='mb-2' htmlFor="email">
        Email Address
      </label>
      <input
        className='mb-5 text-black'
        id="email"
        type="email" 
        name="email"
        placeholder='Enter your email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label className='mb-2' htmlFor="message">
        Message
      </label>
      <textarea
        className='text-black'
        id="message"
        name="message"
        placeholder='Enter your message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      
    </form>

      </div>
  );
}

export default ContactForm;