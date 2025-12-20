import Product from "../components/product";
import productsInfo from '../pages/productsInfo'
import ImageSlider from "../Imageslider";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "diasys mongolia",
        "template_kkhh6bq",
        form.current,
        {
          publicKey: "kdNP9uzUlzv7zraqm",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (<><div className="test1">
    <form className="Test" ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" required />

    <label>Email</label>
    <input type="email" name="user_email" required />

    <label>Message</label>
    <textarea name="message" required />

    <input type="submit" value="Send" />
  </form></div></>
  );
};

export default ContactUs;


