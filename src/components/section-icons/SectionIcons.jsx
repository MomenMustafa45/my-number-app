import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./section-icons.css";

const SectionIcons = ({ children, btns }) => {
  return (
    <div className="section-icons">
      {children.map((child, i) => {
        return (
          <Link key={i}>
            <FontAwesomeIcon icon={child} />
          </Link>
        );
      })}
      {btns && (
        <Link to="/register" className="section-icon-btn">
          {btns}
        </Link>
      )}
    </div>
  );
};

export default SectionIcons;
