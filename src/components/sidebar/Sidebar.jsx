import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <i className="bx bx-home"></i>,
    to: "/",
    section: "",
  },
  {
    display: "Getting Started",
    icon: <i className="bx bx-star"></i>,
    to: "/started",
    section: "started",
  },
  {
    display: "Calendar",
    icon: <i className="bx bx-calendar"></i>,
    to: "/calendar",
    section: "calendar",
  },
  {
    display: "User",
    icon: <i className="bx bx-user"></i>,
    to: "/user",
    section: "user",
  },
  {
    display: "Orders",
    icon: <i className="bx bx-receipt"></i>,
    to: "/order",
    section: "order",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem =
        sidebarRef.current.querySelector(".sidebar_menu_item");
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

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
      <div className="sidebar_logo">Animate</div>
      <div ref={sidebarRef} className="sidebar_menu">
        <div
          ref={indicatorRef}
          className="sidebar_menu_indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`sidebar_menu_item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar_menu_item_icon">{item.icon}</div>
              <div className="sidebar_menu_item_text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
