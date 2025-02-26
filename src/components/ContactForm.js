"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const formRef = useRef(null);
  const router = useRouter();

  const handleSubmit = (event) => {
    // جلوگیری از رفتار پیش‌فرض ارسال فرم
    event.preventDefault();
    
    // ارسال فرم با استفاده از FormSubmit API
    const form = event.target;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      // headers حذف شده چون مشکل ایجاد می‌کرد
    })
    .then(response => {
      if (response.ok) {
        // پاک کردن فرم
        formRef.current.reset();
        
        // ریدایرکت به صفحه thanks
        router.push('/thanks');
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was a problem sending your message. Please try again later.');
    });
  };

  return (
    <form
      ref={formRef}
      action="https://formsubmit.co/mahdi.jazini.frontend@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      className="contact-form"
    >
      {/* برای تنظیمات FormSubmit */}
      <input type="hidden" name="_captcha" value="false" />
      {/* _next حذف شده چون از ریدایرکت کلاینت استفاده می‌کنیم */}
      <input type="hidden" name="_subject" value="New Contact from Portfolio Website" />
      <input type="hidden" name="_template" value="table" />
      
      <div className="contact-inputs">
        <input
          type="text"
          name="name"             
          placeholder="Name"
          className="contact-input"
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="contact-input"
          required
        />
      </div>

      <input
        type="text"
        name="project"
        placeholder="Project"
        className="contact-input"
        required
      />
      
      <textarea
        name="message"
        cols="30"
        rows="5"
        className="contact-input"
        placeholder="Your Message"
        required
      ></textarea>

      <button type="submit" className="button contact-button">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;