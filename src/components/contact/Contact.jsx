import React, { useLayoutEffect, useRef } from 'react'
import PageHeader from '../pageheader/PageHeader'
import emailjs from '@emailjs/browser'
import {toast, ToastContainer} from 'react-toastify'
import { AiFillContacts } from 'react-icons/ai'
import { Animate } from 'react-simple-animate'
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)
    emailjs.sendForm('service_5wh2auy', 'template_8kca2df', form.current, '6CLl26fax9AOCo0JF')
      .then((result) => {
        toast.success("Data sended seccussfully")
      }, (error) => {
        toast.error(error.text);
      });
  };
  let toastOption={
    position: 'bottom-right',
    autoClose:5000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
  }
  return (
    <>
      <section id="contact" className="contact">
        <PageHeader heading="My Contact" icon={<AiFillContacts />} />
        <div className="contact__content">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="contact__content__header-text">Let's Talk</h3>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="contact__content__form">
                <div className="contact__content__form__controlswrapper">
                  <div>
                    <input
                      required
                      name="user_name"
                      id='name'
                      className="inputName"
                      type="text"
                    />
                    <label htmlFor="name" className="nameLabel">
                      Name
                    </label>
                  </div>
                  <div>
                    <input
                      required
                      name="user_email"
                      id='email'
                      className="inputEmail"
                      type="text"
                    />
                    <label htmlFor="email" className="emailLabel">
                      Email
                    </label>
                  </div>
                  <div>
                    <textarea
                      required
                      name="message"
                      id='description'
                      className="inputDescription"
                      type="text"
                      rows="5"
                    />
                    <label htmlFor="description" className="descriptionLabel">
                      Description
                    </label>
                  </div>
                </div>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </Animate>
        </div >
      </section >
      <ToastContainer />
    </>
  )
}

export default Contact