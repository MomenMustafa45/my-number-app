import React, { useEffect, useState } from "react";
import "./payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import SectionIcons from "../../components/section-icons/SectionIcons";
import {
  faArrowRightFromBracket,
  faBell,
  faHeadphonesSimple,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Payment = () => {
  const [bonus, setBonus] = useState(0.0);
  const [credit, setCredit] = useState(0.0);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    setTotal(Number(bonus) + Number(credit));
  }, [bonus, credit]);

  return (
    <section className="payment-section">
      <SectionIcons
        children={[faArrowRightFromBracket, faHeadphonesSimple, faUser, faBell]}
      />
      <div className="btns-box">
        <button>Manual</button>
        <button>Automatic</button>
      </div>

      <div className="calc-box">
        <div>
          <input
            type="number"
            className="calc-number"
            id="bonus"
            onChange={(e) => setBonus(e.target.value)}
            defaultValue={bonus}
          />
          <label htmlFor="bonus">Bonus</label>
        </div>
        <p>+</p>
        <div>
          <input
            type="number"
            className="calc-number"
            id="credit"
            onChange={(e) => setCredit(e.target.value)}
            defaultValue={credit}
          />
          <label htmlFor="credit">Credit</label>
        </div>
        <p>=</p>
        <div>
          <p className="total">{total}</p>
          <label htmlFor="total">Total</label>
        </div>
      </div>

      <div className="processes-box">
        <div className="done-process">
          <p className="process-type">Razar</p>
          <p className="process-value">10</p>
          <p className="process-token">47321548795</p>
          <p className="process-plus">
            <FontAwesomeIcon icon={faPlusSquare} />
          </p>
        </div>
        <div className="add-process-box">
          <select name="" id="">
            <option value="">Razar</option>
            <option value="">Visa</option>
            <option value="">iTunes</option>
            <option value="">Amazon</option>
          </select>
          <input
            type="number"
            placeholder="Value"
            className="process-value-input"
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Card Token"
            className="process-token"
          />
          <p className="process-plus">
            <FontAwesomeIcon icon={faPlusSquare} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Payment;
