import styles from "./Form.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import { HiMail } from "react-icons/hi";
const Form = () => {
  return (
    <div>
      <section className={`${styles.container}`}>
        <div className={`${styles.contact_form}`}>
          <div className={`${styles.top_btn}`}>
            <Button text="ViA SUPPORT CHAT" icon={<MdMessage />} />
            <Button text="ViA CALL" icon={<FaPhoneAlt />} />
          </div>
          <Button isOutline={true} text="ViA EMAIL FORM" icon={<HiMail />} />

          <form >
            <div className={`${styles.form_control}`}>
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className={`${styles.form_control}`}>
              <label htmlFor="">E-Mail</label>
              <input type="email" />
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
    </div>
  );
};

export default Form;
