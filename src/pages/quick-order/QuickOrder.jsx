import "./quick-order.css";
import {
  faArrowRightFromBracket,
  faBell,
  faHeadphonesSimple,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SectionIcons from "../../components/section-icons/SectionIcons";

const DUMMYDATA = [
  {
    serviceName: "Google Voice",
    serverName: ["Server 1 (0.5$)", "Server 2 (0.75$)"],
  },
  {
    serviceName: "Tinder",
    serverName: ["Server 1 (0.5$)", "Server 2 (0.75$)"],
  },
  {
    serviceName: "Netflix",
    serverName: ["Server 1 (0.5$)", "Server 2 (0.75$)"],
  },
];

const QuickOrder = () => {
  return (
    <section className="quick-order-section">
      <SectionIcons
        children={[faArrowRightFromBracket, faHeadphonesSimple, faUser, faBell]}
      />
      <table className="quick-order-table">
        <thead className="quick-order-table-header">
          <tr className="header-row-box">
            <th>Service Name</th>
            <th>Server Name</th>
            <th>Order Again</th>
          </tr>
        </thead>
        <tbody className="quick-order-table-body">
          {DUMMYDATA.map((e) => {
            return (
              <tr className="body-row-box">
                <td>{e.serviceName}</td>
                <td>
                  <select name="" id="" placeholder="choose Server">
                    <option hidden disabled>
                      Choose Server
                    </option>
                    {e.serverName.map((s) => {
                      return <option value={`${s.toLowerCase()}`}>{s}</option>;
                    })}
                  </select>
                </td>
                <td>Order</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default QuickOrder;
