import { Children, useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const Dropdown = (props) => {
  const {
    children,
    title,
    classNameTitle,
    src,
    classNameArrow,
    open: propsOpen,
    type,
    classNameDescription,
  } = props;

  const [open, setOpen] = useState(propsOpen);

  useEffect(() => {
    setOpen(propsOpen);
  }, [propsOpen]);

  const handleClick = () => {
    setOpen(!open);
    if (props.onToggle) {
      props.onToggle(!open);
    }
  };

  return (
    <>
      {type !== "description" && (
        <div>
          <div className="relative mt-3 cursor-pointer" onClick={handleClick}>
            <div className={classNameTitle}>
              {title}
              <img
                src={src}
                alt="arrow"
                className={classNameArrow ? classNameArrow : "hidden"}
              />
            </div>
          </div>
          <div className={open ? "block" : "hidden"}>{children}</div>
        </div>
      )}

      {type === "description" && (
        <div
          className={`cursor-pointer ${classNameDescription}`}
          onClick={handleClick}
        >
          <div className="relative cursor-pointer">
            <div className={classNameTitle}>
              {title}
              <img
                src={src}
                alt="arrow"
                className={classNameArrow ? classNameArrow : "hidden"}
              />
            </div>
          </div>
          <div className={open ? "block" : "hidden"}>{children}</div>
        </div>
      )}
    </>
  );
};

const DropdownPoints = ({ title, children, classNamePoints, icon }) => {
  return (
    <div
      className={`border rounded-[10px] p-[16px] font-medium text-[13px] mt-4 md:text-[16px] md:flex md:justify-between ${classNamePoints} flex justify-between`}
    >
      <div className="flex items-center gap-2">
        {icon && (
          <img src={icon} alt="icon" className="w-[24px] h-[24px] bg-cover" />
        )}
        <p>{title}</p>
      </div>

      <div className="md:flex gap-4">{children}</div>
    </div>
  );
};

const DropdownIcon = ({ src, text, classNameIcon }) => {
  return (
    <div className={`flex gap-2 ${classNameIcon}`}>
      {src && <img src={src} alt="icon" />}
      <p className="text-text-dark-secondary">{text}</p>
    </div>
  );
};

Dropdown.Point = DropdownPoints;
Dropdown.Icon = DropdownIcon;

export default Dropdown;
