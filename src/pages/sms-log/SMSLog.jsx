import SectionBtns from "../../components/sections-btns/SectionBtns";
import SectionIcons from "../../components/section-icons/SectionIcons";
import { smsLogData } from "../../utils/smsLogsData";
import "./sms-log.css";
import {
  faArrowRightFromBracket,
  faHeadphonesSimple,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
const SMSLog = () => {
  return (
    <section className="sms-log-section">
      <SectionBtns firstBtnName="Reusable" secondBtnName="Expired" />
      <SectionIcons
        children={[faArrowRightFromBracket, faHeadphonesSimple, faUser, faBell]}
      />

      {/* LOG TABLE */}
      <table className="smslog-table">
        <thead className="smslog-table-header-box">
          <tr className="header-row-box">
            <th>Details</th>
            <th>Service Name</th>
            <th>Service Number</th>
            <th>Reusability</th>
          </tr>
        </thead>
        <tbody className="smslog-table-body-box">
          {smsLogData.map((s) => {
            return (
              <>
                <tr>
                  <td>
                    <p className="show-btn">Show</p>
                  </td>
                  <td>{s.serviceName}</td>
                  <td>{s.serviceNumber}</td>
                  <td>
                    <p className="check-btn">Check</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>{s.details[0].date}</td>
                  <td colSpan={2}>{s.details[0].smsMsg}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default SMSLog;
