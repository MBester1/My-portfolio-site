import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../index.css";
// import { ExternalLink } from "react-external-link";

function ContactPage() {
  const form = useRef();
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        console.log(result.text);
        alert("Your message has been sent!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div id="contact" className=" pb-5 mt-5">
      <div className="row align-items-center text-center mt-3">
        <h2>Contact</h2>
        <div className="line"></div>
      </div>

      <div className="row align-items-center text-center p-4 mt-3">
        <div className="mb-2">
          <h4>My contact details:</h4>
        </div>
        <div className="col mb-3">
          <h5>
            <small>Email: MBester.dev@gmail.com</small>
          </h5>
        </div>
      </div>

      <div className="row align-items-center text-center p-2 mt-3">
        <div className="mb-2">
          <h4>Email me:</h4>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="col-10 offset-1 col-lg-8 offset-lg-2 pt-2 pb-3 border"
          id="contactForm"
        >
          <div className="mb-3 ">
            <label htmlFor="username" className="form-label text-secondary">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="username"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-secondary">
              Email address
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
            {/* <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-secondary">
              Message
            </label>
            <textarea name="message" id="message" className="form-control" />
          </div>
          <div>
            <input
              type="submit"
              value="Send"
              // id="message"
              className="btn"
            />
          </div>
        </form>

        {/* <div className="line"></div> */}
      </div>
    </div>
  );
}

export default ContactPage;
