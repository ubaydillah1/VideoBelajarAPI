import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="img/logo-video.png" alt="logo" className="cursor-pointer" />
    </Link>
  );
};

export default Logo;
