import { useState } from "react";

/* eslint-disable react/prop-types */
const Dropdown = (props) => {
  const { children, title, classNameTitle, src, classNameArrow } = props;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="relative mt-3 cursor-pointer" onClick={handleClick}>
        <p className={classNameTitle}>
          {title}
          <img
            src={"svg/Bottom Arrow Grey.svg"}
            alt="arrow"
            className={classNameArrow ? classNameArrow : "hidden"}
          />
        </p>
      </div>

      <div className={open ? "block" : "hidden"}>{children}</div>
    </div>
  );
};

const DropdownPoints = ({ title, children }) => {
  return (
    <div className="border rounded-[10px] p-[16px] font-medium text-[13px] mt-4 md:text-[16px] md:flex md:justify-between">
      <p>{title}</p>

      <div className="md:flex gap-4 hidden">{children}</div>
    </div>
  );
};

const DropdownIcon = ({ src, text }) => {
  return (
    <div className="flex gap-2">
      <img src={src} alt="icon" />
      <p className="text-text-dark-secondary">{text}</p>
    </div>
  );
};

Dropdown.Point = DropdownPoints;
Dropdown.Icon = DropdownIcon;

export default Dropdown;
