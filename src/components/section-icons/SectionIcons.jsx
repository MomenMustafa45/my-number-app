import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./section-icons.css";

const SectionIcons = ({ children }) => {
  return (
    <div className="section-icons">
      {children.map((child) => {
        return (
          <Link>
            <FontAwesomeIcon icon={child} />
          </Link>
        );
      })}
    </div>
  );
};

export default SectionIcons;
