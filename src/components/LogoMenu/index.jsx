import { useNavigate } from "react-router-dom";
import Logo from "../../images/Logo.svg";

export default () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        onClick={() => navigate("/")}
        src={Logo}
        // width="250"
        // height="80"
        width="220"
        height="50"
        style={{ cursor: "pointer", paddingTop: "12px"}}
      />
    </div>
  );
};
