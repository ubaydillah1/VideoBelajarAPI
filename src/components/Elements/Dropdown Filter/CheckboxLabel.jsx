/* eslint-disable react/prop-types */
const CheckboxLabel = (props) => {
  const { name, type = "box" } = props;
  return (
    <div className="px-[16px] pb-[5px] pt-[10px]">
      <input type="checkbox" className="hidden" id={name} />
      <label
        htmlFor={name}
        className="flex items-center cursor-pointer space-x-2"
      >
        <div
          className={`w-[18px] h-[18px] border-2 border-primary flex items-center justify-center bg-[#E2FCD9CC] ${
            type === "box" && "rounded-[4px]"
          } ${type === "circle" && "rounded-full"}`}
        ></div>
        <span className="text-text-dark-secondary block pl-1">{name}</span>
      </label>
    </div>
  );
};

export default CheckboxLabel;
