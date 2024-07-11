/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Links = (props) => {
  const { children, to } = props;
  return (
    <>
      <li className="font-medium text-text-dark-secondary text-[16px]">
        <Link to={to}>{children}</Link>
      </li>
    </>
  );
};

export default Links;
