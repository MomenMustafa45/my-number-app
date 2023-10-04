import "./section-btns.css";

const SectionBtns = ({
  firstBtnName,
  secondBtnName,
  firstBtnBgColor = "beige",
  secondBtnBgColor = "burlywood",
}) => {
  return (
    <div className="section-btns-box">
      <button style={{ backgroundColor: { firstBtnBgColor } }}>
        {firstBtnName}
      </button>
      <button style={{ backgroundColor: { secondBtnBgColor } }}>
        {secondBtnName}
      </button>
    </div>
  );
};

export default SectionBtns;
