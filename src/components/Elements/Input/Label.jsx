const Label = (props) => {
  const { children, name } = props;

  return (
    <label htmlFor={name}>
      {children}{" "}
      <span className="text-red-500 text-[14px] sm:text-[16px]">*</span>
    </label>
  );
};

export default Label;
