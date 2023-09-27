import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./section-icons.css";

const SectionIcons = ({ children, btns }) => {
  return (
    <div className="section-icons">
      {children.map((child) => {
        return (
          <Link>
            {btns && (
              <Link to="/register" className="section-icon-btn">
                {btns}
              </Link>
            )}
            <FontAwesomeIcon icon={child} />
          </Link>
        );
      })}
    </div>
  );
};

export default SectionIcons;
