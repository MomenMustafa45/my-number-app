import {
  faArrowRightFromBracket,
  faBell,
  faHeadphonesSimple,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SectionIcons from "../../components/section-icons/SectionIcons";
import SectionBtns from "../../components/sections-btns/SectionBtns";
import "./order-number.css";
import { servicesFakeData } from "../../utils/orderServicesData";
import { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";

const OrderNumber = () => {
  const [paginationNums, setPaginationNums] = useState([]);

  useEffect(() => {
    const servicesCount = Math.ceil(servicesFakeData.length / 20);
    const newArr = [];
    for (let i = 0; i < servicesCount; i++) {
      newArr.push(i + 1);
      setPaginationNums([...newArr]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="order-number-section">
      <SectionBtns firstBtnName="Verification" secondBtnName="Rental" />
      <SectionIcons
        children={[faArrowRightFromBracket, faHeadphonesSimple, faUser, faBell]}
      />
      <input
        type="text"
        placeholder="Search Services"
        className="search-service-bar"
      />
      <div className="services-container">
        {servicesFakeData.map((d, i) => {
          return <p key={i}>{d}</p>;
        })}
      </div>

      <Pagination paginationNums={paginationNums} />
    </section>
  );
};

export default OrderNumber;
