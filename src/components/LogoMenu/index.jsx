import { useNavigate } from "react-router-dom";
import Logo from "../../images/logo.png";

export default () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        onClick={() => navigate("/")}
        src={Logo}
        width="250"
        height="80"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};
