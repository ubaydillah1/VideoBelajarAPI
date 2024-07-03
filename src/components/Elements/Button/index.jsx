import { useEffect, useState } from "react";
import GoogleButton from "./GoogleButton";

const Button = (props) => {
  const { children, classname, type } = props;
  const [link, setLink] = useState(props.link);

  useEffect(() => {
    if (props.link === undefined) {
      setLink("/");
    }
  }, [props.link]);

  const handleLink = () => {
    window.location.href = link;
  };

  return (
    <>
      {type === "googleButton" && <GoogleButton />}
      {type === undefined && (
        <button
          onClick={handleLink}
          className={`h-[42px] rounded-[10px] font-bold my-3 text-[14px] sm:text-[16px] ${classname}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
