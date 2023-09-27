import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faComments,
  faEnvelopeCircleCheck,
  faFileContract,
  faFileLines,
  faHandHoldingDollar,
  faHouseChimney,
  faPaperPlane,
  faRightToBracket,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";

const sidebarNavItems = [
  {
    display: "Home Page",
    icon: <FontAwesomeIcon icon={faHouseChimney} />,
    to: "/",
    section: "",
  },
  {
    display: "Quick Order",
    icon: <FontAwesomeIcon icon={faStopwatch} />,
    to: "/quick-order",
    section: "quick-order",
  },
  {
    display: "Order Number",
    icon: <FontAwesomeIcon icon={faEnvelopeCircleCheck} />,
    to: "/order-number",
    section: "order-number",
    numbers: ["0121245647"],
  },
  {
    display: "SMS Log",
    icon: <FontAwesomeIcon icon={faComments} />,
    to: "/sms-log",
    section: "sms-log",
  },
  {
    display: "Rental Log",
    icon: <FontAwesomeIcon icon={faFileLines} />,
    to: "/rental-log",
    section: "rental-log",
  },
  {
    display: "Payment",
    icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
    to: "/payment",
    section: "payment",
  },
  {
    display: "Pricing",
    icon: <FontAwesomeIcon icon={faFileContract} />,
    to: "/pricing",
    section: "pricing",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarRef = useRef();
  const location = useLocation();

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar_logo">A LOGO PHOTO</div>

      <div ref={sidebarRef} className="sidebar_menu">
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index} className="sidebar_link">
            <div
              className={`sidebar_menu_item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              {activeIndex === index && <span></span>}
              <div className="sidebar_menu_item_icon">{item.icon}</div>
              <div className="sidebar_menu_item_text">{item.display}</div>
            </div>

            {item.numbers && (
              <div className="inner-menu-item">
                {item.numbers.map((n, index) => {
                  return (
                    <div className="number-container" key={index}>
                      <p>
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </p>
                      <p>{n}</p>
                    </div>
                  );
                })}

                <div className="number-container">
                  <p>
                    <FontAwesomeIcon icon={faCirclePlus} />
                  </p>
                  <p>Add New</p>
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Bottom BTNS */}
      {/* Bottom BTNS */}

      <div>
        <div className="sidebar_menu_item">
          <div className="sidebar_menu_item_icon">
            <FontAwesomeIcon icon={faSun} />
          </div>
          <div className="sidebar_menu_item_text">Switch Theme</div>
        </div>

        <div className="sidebar_menu_item">
          <div className="sidebar_menu_item_icon">
            <FontAwesomeIcon icon={faRightToBracket} />
          </div>
          <div className="sidebar_menu_item_text">Collapse</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
