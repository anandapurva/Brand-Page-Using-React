import styles from "./Form.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";  // This hook is used to reflect the changes on UI immediately.
import { HiMail } from "react-icons/hi";
const Form = () => {
  let [name, setName] = useState("Apurva");
  let [email, setEmail] = useState("apu@gmail.com");
  let [text, setText] = useState("I'm Software Developer");

  let showValue = (event) => {
    event.preventDefault(); // To prevent from reloading the webpage
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <><section className={`${styles.container}`}>
          <div className={`${styles.contact_form}`}>
              <div className={`${styles.top_btn}`}>
                  <Button text="ViA SUPPORT CHAT" icon={<MdMessage />} />
                  <Button text="ViA CALL" icon={<FaPhoneAlt />} />
              </div>
              <Button isOutline={true} text="ViA EMAIL FORM" icon={<HiMail />} />

              <form onSubmit={showValue}>
                  <div className={`${styles.form_control}`}>
                      <label htmlFor="">Name</label>
                      <input type="text" name="myname" />
                  </div>
                  <div className={`${styles.form_control}`}>
                      <label htmlFor="">E-Mail</label>
                      <input type="email" name="myemail" />
                  </div>
                  <div className={`${styles.form_control}`}>
                      <label htmlFor="">Text</label>
                      <textarea name="text" rows={8} />
                  </div>
                  <div className={`${styles.form_control_btn}`}>
                      <Button text="SUBMIT" />
                  </div>
              </form>

          </div>


          <div className={`${styles.contact_image}`}>
              <img src="/images/Service 24_7-pana 1.svg" alt="img" />
          </div>


      </section>
      <div className={`${styles.content}`}>
        {name} -{">"} {email} -{">"} {text}
      </div>
      </>
  );
};

export default Form;
