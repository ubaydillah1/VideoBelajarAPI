import { useState } from "react";

const Input = (props) => {
  const { name, placeholder } = props;
  const [type, setType] = useState(props.type);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [focus, setFocus] = useState(props.focus);

  if (focus === "true") {
    setFocus(true);
  }

  const togglePasswordVisibility = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className="px-[8px] h-[48px] mt-2 border border-[#F1F1F1] w-full focus:outline-[#3ECF4C] text-[14px] sm:text-[16px]"
        autoFocus={focus}
      />
      {props.type === "password" && (
        <EyePassword
          onClick={togglePasswordVisibility}
          isPasswordVisible={isPasswordVisible}
        />
      )}
    </div>
  );
};

const EyePassword = ({ onClick, isPasswordVisible }) => {
  return (
    <img
      src="svg/eye-icon.svg"
      alt="eye"
      className={`absolute right-3 top-6 cursor-pointer hover:opacity-70 ${
        isPasswordVisible ? "opacity-70" : ""
      }`}
      onClick={onClick}
    />
  );
};

export default Input;
