import "./social-connect.css";

const SocialConnect = ({ social, color }) => {
  return (
    <p className="social-connect-link" style={{ backgroundColor: `${color}` }}>
      Connect with {social}
    </p>
  );
};

export default SocialConnect;
