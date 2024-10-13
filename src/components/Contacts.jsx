import React from "react";
import "../styles/contacts.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contacts() {
  const TELEGRAM_BOT_ID = process.env.TELEGRAB_BOT_ID;
  const CHAT_ID = process.env.CHAT_ID;

  const successNotify = () =>
    toast.success("Заявка успешно отправлена!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const errorNotify = () =>
    toast.error("Упс, что-то пошло не так :(", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handleSubmitForm = (event) => {
    const name = document.querySelector("#name").value;
    const phone = document.querySelector("#phone").value;
    const text = `Новая заявка. %0A Имя: ${name}, телефон: ${phone}.`;
    event.preventDefault();
    axios
      .post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_ID}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
      )
      .then((response) => {
        successNotify();
        setButtonDisabled();
      })
      .catch((err) => {
        errorNotify();
        setButtonDisabled();
      });
    document.querySelector("#name").value = "";
    document.querySelector("#phone").value = "";
  };

  const setButtonDisabled = () => {
    const button = document.querySelector("#submit-button");
    button.disabled = true;
    setTimeout(() => {
      button.disabled = false;
    }, 5000);
  };

  return (
    <>
      <section className="contacts blue">
        <div className="container padding">
          <h2 className="title">Как с нами связаться</h2>
          <div className="contacts__text">
            Оставьте заявку на выездную химчистку и мы свяжемся с вами для
            уточнения деталей.
          </div>
          <form onSubmit={handleSubmitForm} action="#" className="contact-form">
            <div className="input-form">
              <input
                autoComplete="off"
                placeholder="&#8203;"
                type="text"
                required
                id="name"
              />
              <label htmlFor="name">Имя</label>
            </div>
            <div className="input-form">
              <input
                autoComplete="off"
                required
                placeholder="&#8203;"
                type="text"
                id="phone"
              />
              <label htmlFor="phone">Телефон</label>
            </div>
            <div className="policy-form">
              <input required type="checkbox" name="policy" id="policy" />
              <label htmlFor="policy">
                Согласен с <br></br>
                <span>политикой конфиденциальности</span>
              </label>
            </div>
            <button id="submit-button" type="submit">
              Оставить заявку
            </button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
